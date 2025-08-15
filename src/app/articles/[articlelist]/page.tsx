import Link from "next/link";

export default async function ArticlesList({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "eg" | "fr" | "am" }>;
}) {
  const { articleId } = await params;
  const { lang = "eg" } = await searchParams;
  return (
    <>
      <div className="flex m-4 flex-col justify-center items-center">
        <div className="flex bg-slate-200 gap-3 rounded-2xl shadow-xl shadow-slate-300  h-80 w-64 flex-col justify-center items-center">
          <h1>Article Liast</h1>
          <h2>Article {articleId}</h2>
          <p>Article {lang}</p>
          <ul className="flex rounded-ee-3xl  rounded-ss-3xl bg-slate-300 gap-3  h-40 w-40 flex-col justify-center items-center">
            <Link
              className="py-1 px-4 w-36 bg-sky-500 rounded-md text-slate-50 text-center font-sans font-semibold"
              href="/articles/id?lang=eg"
            >
              English
            </Link>
            <Link
              className="py-1 px-4 w-36 bg-blue-500 rounded-md text-slate-50 text-center font-sans font-semibold"
              href="/articles/id?lang=fr"
            >
              Freach
            </Link>
            <Link
              className="py-1 px-4 w-36 bg-sky-500 rounded-md text-slate-50 text-center font-sans font-semibold"
              href={`/articles/${articleId}?lang=am`}
            >
              Amharic
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
