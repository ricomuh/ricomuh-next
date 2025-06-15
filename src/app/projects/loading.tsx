import ProjectsFilter from "./projects-filter";
import ProjectCard from "@/components/project-card";

export const metadata = {
  title: "Projects",
  description: "A collection of my projects",
  keywords: [
    "projects",
    "portfolio",
    "software engineer",
    "ricomuh",
    "Rico Muhammad Nashrullah",
    "Rico Nashrullah",
  ],
};

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto px-4 mt-20 mb-30">
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-4xl font-bold text-gray-200">Projects</h1>
        <ProjectsFilter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProjectCard key={index} loading={true} />
        ))}
      </div>
    </div>
  );
}
