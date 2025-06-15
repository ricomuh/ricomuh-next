import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";
import { limitWords, previewUrl } from "@/lib/strings";
import { InferSelectModel } from "drizzle-orm";
import { articlesTable } from "@/db/schema";

type ArticleCardProps =
  | { loading: true; article?: never }
  | {
      loading: false;
      article: InferSelectModel<typeof articlesTable>;
    };

export default function ArticleCard({
  loading = false,
  article,
}: ArticleCardProps) {
  if (loading || !article) {
    return (
      <div className="p-2 flex flex-col items-center">
        <div className="w-full h-full flex justify-center items-center bg-gray-200 animate-pulse rounded-lg">
          <div className="w-full h-full aspect-video md:aspect-square" />
        </div>
      </div>
    );
  }

  return (
    <Tooltip key={article.uuid}>
      <TooltipTrigger asChild>
        <div className="p-2 flex flex-col items-center">
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full"
          >
            <div className="flex relative w-full aspect-video md:aspect-square overflow-hidden rounded-lg group hover:ring-3 hover:ring-primary-400/50 duration-200">
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
        <p>{article.url && previewUrl(article.url)}</p>
      </TooltipContent>
    </Tooltip>
  );
}
