import { getAllProjects } from "@/lib/be/projects";
import ProjectsFilter from "./projects-filter";
import ProjectCard from "@/components/project-card";
import { Suspense } from "react";

export const metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web, mobile, desktop, and game development projects. See what I've built and my technical expertise.",
  keywords: [
    "projects",
    "portfolio",
    "web development",
    "mobile development",
    "software engineer",
    "ricomuh",
    "Rico Muhammad Nashrullah",
    "Rico Nashrullah",
    "case study",
  ],
  openGraph: {
    title: "Projects | ricomuh",
    description:
      "Explore my portfolio of web, mobile, desktop, and game development projects.",
    type: "website",
    url: "https://ricomuh.com/projects",
  },
  twitter: {
    title: "Projects | ricomuh",
    description:
      "Explore my portfolio of web, mobile, desktop, and game development projects.",
  },
};

export default async function Projects({
  searchParams,
}: {
  searchParams?: Promise<{ type?: "web" | "mobile" | "desktop" | "game" }>;
}) {
  const params = await searchParams;
  const type = params?.type;
  const projects = await getAllProjects(type);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto px-4 mt-20 mb-30">
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-4xl font-bold text-gray-200">Projects</h1>
        <Suspense
          fallback={<div className="w-32 h-8 bg-gray-700 animate-pulse" />}
        >
          <ProjectsFilter />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
