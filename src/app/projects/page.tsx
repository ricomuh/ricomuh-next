import { getAllProjects } from "@/lib/be/projects";
import Image from "next/image";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto px-4 mt-20">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <div
            key={project.slug}
            className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200`}
          >
            <Image
              src={project.featuredImageUrl}
              alt={project.name}
              className="w-full h-48 object-cover"
              width={384}
              height={192}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
