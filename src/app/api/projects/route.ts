import { projectsTable } from "@/db/schema";
import { db } from "@/db";
import { desc } from "drizzle-orm";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;

  try {
    const projects = await db
      .select({
        name: projectsTable.name,
        slug: projectsTable.slug,
        featuredImageUrl: projectsTable.featuredImageUrl,
        gridCols: projectsTable.gridCols,
        gridRows: projectsTable.gridRows,
      })
      .from(projectsTable)
      .limit(10)
      .offset((page - 1) * 10)
      .orderBy(desc(projectsTable.createdAt));

    const totalProjects = await db.$count(projectsTable);
    const totalPages = Math.ceil(totalProjects / 10);

    return Response.json({
      data: {
        projects,
        page,
        totalPages,
      },
      error: false,
    });
  } catch {
    return Response.json(
      { error: true, message: "Invalid page parameter" },
      { status: 400 }
    );
  }
}
