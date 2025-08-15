import Link from "next/link";

export default function Articles() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 px2">
        <h1 className="text-center text-3xl font-sans capitalize font-semibold underline">
          list of articles
        </h1>
        <ul className="flex flex-col gap-2 font-semibold text-lg">
          <Link href="/articles/news1?lang=eg">
            Read In{" "}
            <span className="text-center text sm text-blue-400 font-mono">
              English
            </span>
          </Link>
          <Link href="/articles/news2?lang=fr">
            Read In{" "}
            <span className="text-center text sm text-blue-400 font-mono">
              Freanch
            </span>
          </Link>
          <Link href="/articles/news1?lang=am">
            Read In{" "}
            <span className="text-center text sm text-blue-400 font-mono">
              Amharic
            </span>
          </Link>
        </ul>
      </div>
    </>
  );
}
