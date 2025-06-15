import ArticleCard from "@/components/article-card";

export const metadata = {
  title: "Articles About Me",
  description: "A collection of articles about me and my work.",
};

export default async function Loading() {
  return (
    <section className="flex flex-col mt-20 mb-30 max-w-3xl mx-auto px-4">
      {/* articles about me */}
      <h2 className="text-2xl font-bold text-gray-200 mb-4 w-full">
        Articles About Me
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* articles */}
        {Array.from({ length: 10 }).map((_, index) => (
          <ArticleCard key={index} loading={true} />
        ))}
      </div>
    </section>
  );
}
