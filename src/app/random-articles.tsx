import { getRandomArticles } from "@/lib/be/articles";
import limitWords from "@/lib/limit-words";
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
          <div
            key={article.uuid}
            className="w-1/3 p-2 flex flex-col items-center"
          >
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full"
            >
              {/* <Image
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover rounded-lg mb-2"
              width={384}
              height={192}
              />
              <h3 className="text-lg font-semibold text-center">
              {article.title}
            </h3> */}
              <div className="flex relative w-full aspect-square overflow-hidden rounded-lg group hover:ring-3 hover:ring-primary-400/50 duration-200">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 duration-200"
                  width={400}
                  height={400}
                />
                <div className="relative bg-gradient-to-t from-black/90 via-black/50 w-full h-full flex items-end justify-end p-2">
                  <h3 className="text-base font-semibold text-left">
                    {limitWords(article.title, 10)}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
