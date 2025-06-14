import { getProjectBySlug } from "@/lib/be/projects";
import { notFound } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { previewUrl } from "@/lib/strings";
import { Link2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }
  //   check if the project is square, landscape, or portrait using project.gridCols and project.gridRows
  //   const className =
  //     project.gridCols === project.gridRows
  //       ? "aspect-square"
  //       : project.gridCols > project.gridRows
  //       ? "aspect-[9/16] basis-1/2 mx-w-[400px]"
  //       : "aspect-video w-full";
  const orientation =
    project.gridCols === project.gridRows
      ? "square"
      : project.gridCols > project.gridRows
      ? "portrait"
      : "landscape";

  //   if the imageUrls.length is less than 3 and the orientation is portrait, then populate it with the imageUrls that are available
  const imageUrls = project.imageUrls ?? [];
  if (imageUrls.length < 5) {
    for (let i = imageUrls.length; i < 5; i++) {
      imageUrls.push(
        imageUrls[i % imageUrls.length] || project.featuredImageUrl
      );
    }
  }

  const GalleryImage = ({ imageUrl }: { imageUrl: string }) => {
    if (orientation === "portrait") {
      // use card component for portrait images with basis-1/2
      return (
        <CarouselItem className="relative pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="relative">
              <CardContent className="relative flex aspect-[9/16] items-center justify-center">
                <Image
                  src={imageUrl}
                  alt={project.name}
                  className="object-cover w-full h-full rounded-lg relative"
                  fill
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      );
    }

    return (
      <CarouselItem>
        <div
          className={`relative w-full aspect-video border rounded-lg overflow-hidden`}
        >
          <Image
            src={imageUrl}
            alt={project.name}
            className="object-cover w-full h-full rounded-lg"
            fill
          />
        </div>
      </CarouselItem>
    );
  };
  return (
    <section className="max-w-3xl mx-auto px-4 mt-20 mb-30 overflow-hidden md:overflow-visible">
      {/* {project.imageUrls} */}
      <div className="flex">
        {Array.isArray(project.imageUrls) && project.imageUrls.length > 0 && (
          // carousel for images
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {project.imageUrls?.map((imageUrl, index) => (
                <GalleryImage key={index} imageUrl={imageUrl} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>

      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex flex-col w-full md:w-3/5">
          <Card className="p-1">
            <CardContent className="px-4 py-2">
              <h1 className="text-3xl font-bold text-gray-200 mb-2">
                {project.name}
              </h1>
              <p className="text-gray-400 mb-4">{project.description}</p>
              {project.videoEmbedUrl && (
                <div className="aspect-video w-full mb-4">
                  <iframe
                    src={project.videoEmbedUrl}
                    title={project.name}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Type:</span> {project.type}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col w-full md:w-2/5 md:ml-10 mt-10 md:mt-0">
          <Card className="p-1 w-full">
            <CardContent className="px-4 py-2">
              {/* make a project details contains url, github url, technologies vertically */}
              <div className="flex flex-col space-y-2">
                {project.url && (
                  <div>
                    <h3 className="font-semibold">Project URL:</h3>
                    <Button
                      variant="link"
                      asChild
                      className="text-primary-500 hover:underline p-0 px-0! m-0 text-sm"
                    >
                      <Link target="__blank" href={project.url}>
                        <Link2 />
                        {previewUrl(project.url)}
                      </Link>
                    </Button>
                  </div>
                )}

                {project.githubUrl && (
                  <div>
                    <h3 className="font-semibold">GitHub URL:</h3>
                    <Button
                      variant="link"
                      asChild
                      className="text-primary-500 hover:underline p-0 text-sm"
                    >
                      <Link target="__blank" href={project.githubUrl}>
                        {previewUrl(project.githubUrl)}
                      </Link>
                    </Button>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold">Technologies:</h3>
                  <p className="text-sm text-gray-500">
                    {project.technologies?.join(", ")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
