import WendersImeges, { WonderImage } from "@/src/app/photo-feed/wonders";
import Modal from "@/src/components/modal";
import Image from "next/image";

export default async function PhotoFeedId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = WendersImeges.find((photo) => photo.id === id);
  return (
    <Modal>
      <div className="flex flex-col items-center">
        <Image
          src={photo?.src}
          alt={photo?.name}
          width={500}
          height={500}
          className="w-full h-full object-cover aspect-square rounded-md shadow-md shadow-slate-400 "
        ></Image>
      </div>
    </Modal>
  );
}
