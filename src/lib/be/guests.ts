"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import { guestsignsTable } from "@/db/schema";
import { desc, InferSelectModel } from "drizzle-orm";
import { revalidatePath } from "next/cache";
// import { revalidatePath } from "next/cache";
import { z } from "zod/v4";

const GuestSignSchema = z.object({
  name: z.string().min(2).max(100),
  message: z.string().min(2).max(500).trim(),
});

export async function createSign(
  _state: unknown,
  formData: FormData
): Promise<{
  errors?: Record<string, string[]> | null | string;
}> {
  const session = await auth();

  const name = session?.user?.name || "Anonymous";
  const message = formData.get("message")?.toString().trim() || "";

  const result = GuestSignSchema.safeParse({ name, message });
  if (!result.success) {
    // throw new Error("Invalid input");
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const signResult = await sign(name, message);

  if (!signResult.success) {
    return {
      errors: {
        message: [signResult.error || "Failed to sign guest book"],
      },
    };
  }

  revalidatePath("/guestbook");

  return {
    errors: null,
  };
}

export async function sign(
  name: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await db
      .insert(guestsignsTable)
      .values({
        name,
        message,
      })
      .returning();

    if (result.length === 0) {
      throw new Error("Failed to insert guest sign into the database");
    }

    // await revalidatePath("/guestbook");
    return { success: true };
  } catch (error) {
    console.error("Error signing guest book:", error);
    return { success: false, error: "Failed to sign guest book" };
  }
}

export async function getGuestSigns(
  amount: number = 10
): Promise<InferSelectModel<typeof guestsignsTable>[]> {
  const guestSigns = await db
    .select()
    .from(guestsignsTable)
    .orderBy(desc(guestsignsTable.createdAt))
    .limit(amount);

  return guestSigns;
}
