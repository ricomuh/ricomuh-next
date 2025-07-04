import { getRandomProjects } from "@/lib/be/projects";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default async function RandomProjects({
  loading,
}: {
  loading?: boolean;
}) {
  const classNames = [
    "left-1/2 top-8  -translate-x-1/2 z-1",
    "left-0 top-0",
    "right-0 top-0",
  ];

  if (loading) {
    return (
      <div className="relative w-full md:w-1/2 h-36 flex justify-end items-end">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`absolute w-36 aspect-video border flex justify-center items-center rounded-lg group overflow-hidden hover:ring-2 hover:ring-primary-400/50 hover:scale-110 duration-200 hover:z-20 ${classNames[index]}`}
          >
            <div className="w-full h-full flex justify-center items-center bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  const projects = await getRandomProjects(3);

  //   contoh penggunaan Tooltip
  //   <Tooltip>
  //   <TooltipTrigger>Hover</TooltipTrigger>
  //   <TooltipContent>
  //     <p>Add to library</p>
  //   </TooltipContent>
  // </Tooltip>

  return (
    <div className="relative w-full md:w-1/2 h-36 flex justify-end items-end">
      {projects.map((project, index) => (
        <Tooltip key={project.slug}>
          <TooltipTrigger asChild>
            <div
              className={`absolute w-36 aspect-video border flex justify-center items-center rounded-lg group overflow-hidden hover:ring-2 hover:ring-primary-400/50 hover:scale-110 duration-200 hover:z-20 ${classNames[index]}`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="w-full h-full"
              >
                <Image
                  src={project.featuredImageUrl}
                  alt={project.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{project.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
      <Button className="relative z-10 group" asChild variant="link">
        <Link href="/projects">
          View All Projects{" "}
          <ChevronRight className="inline-block transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}
