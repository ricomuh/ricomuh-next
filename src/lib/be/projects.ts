import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import { desc, eq, InferSelectModel, sql } from "drizzle-orm";

export async function getProjects(page: number = 1): Promise<{
  projects: Pick<
    InferSelectModel<typeof projectsTable>,
    "name" | "slug" | "featuredImageUrl" | "gridCols" | "gridRows"
  >[];
  totalPages: number;
}> {
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

  return {
    projects,
    totalPages,
  };
}

export async function getAllProjects(
  type?: "web" | "mobile" | "desktop" | "game"
): Promise<
  Pick<
    InferSelectModel<typeof projectsTable>,
    "name" | "slug" | "featuredImageUrl" | "url" | "type"
  >[]
> {
  const allProjects = await db
    .select({
      name: projectsTable.name,
      slug: projectsTable.slug,
      featuredImageUrl: projectsTable.featuredImageUrl,
      url: projectsTable.url,
      type: projectsTable.type,
    })
    .from(projectsTable)
    .where(type ? eq(projectsTable.type, type) : undefined)
    .orderBy(desc(projectsTable.createdAt));

  return allProjects;
}

export async function getRandomProjects(
  amount: number = 1
): Promise<
  Pick<
    InferSelectModel<typeof projectsTable>,
    "name" | "slug" | "featuredImageUrl"
  >[]
> {
  const randomProjects = await db
    .select({
      name: projectsTable.name,
      slug: projectsTable.slug,
      featuredImageUrl: projectsTable.featuredImageUrl,
    })
    .from(projectsTable)
    .orderBy(sql`random()`)
    .limit(amount);

  return randomProjects;
}

export async function getProjectBySlug(
  slug: string
): Promise<InferSelectModel<typeof projectsTable>> {
  const [project] = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.slug, slug))
    .limit(1);

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
}
