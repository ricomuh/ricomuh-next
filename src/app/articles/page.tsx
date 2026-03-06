import ArticleCard from "@/components/article-card";
import { getAllArticles } from "@/lib/be/articles";

export const metadata = {
  title: "Articles",
  description:
    "Read my articles on software engineering, web development, mobile development, and other tech topics. Insights and tutorials from my experience.",
  keywords: [
    "articles",
    "blog",
    "software engineering",
    "web development",
    "tech tutorial",
    "ricomuh",
    "Rico Muhammad Nashrullah",
  ],
  openGraph: {
    title: "Articles | ricomuh",
    description:
      "Read my articles on software engineering, web development, mobile development, and other tech topics.",
    type: "website",
    url: "https://ricomuh.com/articles",
  },
  twitter: {
    title: "Articles | ricomuh",
    description:
      "Read my articles on software engineering, web development, mobile development, and other tech topics.",
  },
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <section className="flex flex-col mt-20 mb-30 max-w-3xl mx-auto px-4">
      {/* articles about me */}
      <h2 className="text-2xl font-bold text-gray-200 mb-4 w-full">
        Articles About Me
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* articles */}
        {articles.map((article) => (
          <ArticleCard key={article.uuid} article={article} loading={false} />
        ))}
      </div>
    </section>
  );
}
