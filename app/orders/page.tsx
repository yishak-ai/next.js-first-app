"use client";
import { useRouter } from "next/navigation";

export default function orderproduts() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order add to chart");
    router.back();
  };

  return (
    <>
      <div className="bg-slate-300 p-6 flex flex-col justify-center items-center">
        <h1 className="text-lg text-center font-bold font-mono">
          Order product from lists
        </h1>
        <button
          onClick={handleClick}
          className="bg-blue-500 shadow-lg shadow-sky-400 hover:bg-sky-500 text-slate-50 py-2 px-4 text-center text-xlg font-serif font-semibold rounded-md border-none"
        >
          Add Chart
        </button>
      </div>
    </>
  );
}
