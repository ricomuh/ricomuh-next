import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getRandomArticles } from "@/lib/be/articles";
import { limitWords, previewUrl } from "@/lib/strings";
import Image from "next/image";
import Link from "next/link";

export default async function RandomArticles() {
  const articles = await getRandomArticles(3);

  return (
    <section className="flex flex-col mb-20 mt-10">
      {/* articles about me */}
      <h2 className="text-2xl font-bold text-gray-200 mb-4 w-full">
        Articles About Me
      </h2>
      <div className="flex">
        {/* articles */}
        {articles.map((article) => (
          <Tooltip key={article.uuid}>
            <TooltipTrigger asChild>
              <div className="w-1/3 p-2 flex flex-col items-center">
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  <div className="flex relative w-full aspect-square overflow-hidden rounded-lg group hover:ring-3 hover:ring-primary-400/50 duration-200">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 duration-200"
                      width={400}
                      height={400}
                    />
                    <div className="relative bg-gradient-to-t from-black/90 via-black/50 w-full h-full flex flex-col items-start justify-end p-2">
                      <h3 className="text-base font-semibold text-left leading-tight">
                        {limitWords(article.title, 10)}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1 leading-tight">
                        {limitWords(article.description!, 5)}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{previewUrl(article.url)}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
