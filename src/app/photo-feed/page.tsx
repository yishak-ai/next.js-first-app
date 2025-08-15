import Link from "next/link";
import wenders from "./wonders";
import Image from "next/image";

export default function PhotoFeed() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold font-mono text-blue-600">
        የተለያዩ የኢትዮጵያ ታሪካዊ ቦታዎች
      </h1>

      <div className="grid grid-cols-4 p-3 gap-3">
        {wenders.map((wender) => {
          return (
            <Link key={wender.id} href={`/photo-feed/${wender.id}`}>
              <Image
                src={wender.src}
                alt={wender.name}
                width={200}
                height={200}
                className="w-full h-full object-cover aspect-square rounded-md shadow-md shadow-slate-400 "
              ></Image>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
