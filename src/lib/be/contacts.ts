import { db } from "@/db";
import { contactsTable } from "@/db/schema";
import { z } from "zod/v4";

const messageSchema = z.object({
  name: z.string().min(2).max(100),
  subject: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export async function sendMessage(
  name: string,
  subject: string,
  email: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Here you would typically send the message to an email service or store it in a database.
    // For demonstration purposes, we'll just log it.
    // console.log("Message sent:", { name, email, message });
    const parsedMessage = messageSchema.parse({
      name,
      email,
      message,
      subject,
    });

    const result = await db
      .insert(contactsTable)
      .values({
        name: parsedMessage.name,
        subject: parsedMessage.subject,
        email: parsedMessage.email,
        message: parsedMessage.message,
      })
      .returning();

    if (result.length === 0) {
      throw new Error("Failed to insert message into the database");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, error: "Failed to send message" };
  }
}
