import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<Response> {
  const { slug } = params;

  try {
    const [project] = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.slug, slug))
      .limit(1)
      .execute();

    if (!project) {
      return Response.json(
        { error: true, message: "Project not found" },
        { status: 404 }
      );
    }

    return Response.json({ data: project, error: false });
  } catch {
    return Response.json(
      { error: true, message: "An error occurred while fetching the project" },
      { status: 500 }
    );
  }
}
