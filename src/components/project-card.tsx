import { projectsTable } from "@/db/schema";
import { previewUrl } from "@/lib/strings";
import { InferSelectModel } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps =
  | {
      loading: true;
      project?: never;
    }
  | {
      loading?: false;
      project: Pick<
        InferSelectModel<typeof projectsTable>,
        "slug" | "name" | "featuredImageUrl" | "url"
      >;
    };

export default function ProjectCard({
  loading = false,
  project,
}: ProjectCardProps) {
  if (loading || !project) {
    return (
      <div className="p-2 flex flex-col items-center">
        <div className="w-full h-full flex justify-center items-center bg-gray-200 animate-pulse rounded-lg">
          <div className="w-full h-full aspect-video md:aspect-video" />
        </div>
      </div>
    );
  }

  return (
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
          <div className="m-auto text-gray-200 text-sm">{project.name}</div>
        </div>
      </div>
    </Link>
  );
}
