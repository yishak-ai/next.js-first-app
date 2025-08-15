import WendersImeges, { WonderImage } from "@/src/app/photo-feed/wonders";

import Image from "next/image";

export default async function PhotoFeedId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = WendersImeges.find((photo) => photo.id === id);
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/3 h-1/3 p-3">
        <Image
          src={photo?.src}
          alt={photo?.name}
          width={500}
          height={500}
          className="w-full h-full object-fit  aspect-square rounded-md shadow-md shadow-slate-400 "
        ></Image>
      </div>

      <div className="flex m-10 flex-col items-center w-1/2 ">
        <h1 className="text-3xl font-bold font-mono text-blue-600">
          {photo?.name}
        </h1>
        <p>{photo?.description}</p>
      </div>
    </div>
  );
}
