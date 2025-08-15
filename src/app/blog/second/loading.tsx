import logingIcon from "@/public/loading.png";
export default function Loding() {
  return (
    <div className="flex flex-col h-64 justify-center items-center">
      <img
        className="animate-spin"
        height={50}
        width={50}
        src={logingIcon.src}
        alt=""
      />
    </div>
  );
}
