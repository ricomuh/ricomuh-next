export default async function ArticlesAboutMePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto px-4">
      <section className="flex flex-col items-center mt-40 mb-20">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Articles About Me
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Here are some articles that talk about me and my work.
        </p>
        {/* RandomArticles component will be rendered here */}
      </section>
    </div>
  );
}
