import { getAllProjects } from "@/lib/be/projects";
import { previewUrl } from "@/lib/strings";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto px-4 mt-20 mb-30">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div
              className={`relative aspect-video group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 hover:ring-2 hover:ring-primary-400`}
            >
              <Image
                src={project.featuredImageUrl}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-200"
                width={384}
                height={192}
              />
              <div className="p-4 relative z-10 bg-gradient-to-t from-black to-transparent h-full flex flex-col justify-end group-hover:opacity-0 duration-200">
                <h2 className="text-xl font-semibold text-gray-200">
                  {project.name}
                </h2>
                {project.url && (
                  <p className="text-primary-200">{previewUrl(project.url)}</p>
                )}
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-200 group-hover:backdrop-blur-sm flex">
                <div className="m-auto text-gray-200 text-sm">
                  {project.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
