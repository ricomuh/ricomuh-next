import ArticleCard from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { getRandomArticles } from "@/lib/be/articles";
import Link from "next/link";

export default async function RandomArticles() {
  const articles = await getRandomArticles(3);

  return (
    <section className="flex flex-col mb-20 mt-10">
      {/* articles about me */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 w-full">
          Articles About Me
        </h2>
        <Button variant="link" asChild>
          <Link href="/articles" className="text-primary-400 hover:underline">
            See All
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* articles */}
        {articles.map((article) => (
          <ArticleCard key={article.uuid} article={article} />
        ))}
      </div>
    </section>
  );
}
