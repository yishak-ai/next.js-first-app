"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import logingIcon from "@/public/loading.png";

export default function OrderProducts() {
  const router = useRouter();
  const [loding, setloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loding) {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen">
          <img
            className="animate-spin"
            height={50}
            width={50}
            src={logingIcon.src}
            alt=""
          />
        </div>
      </>
    );
  }
  const handleOrder = () => {
    router.back();
  };
  return (
    <div className="bg-slate-300 p-6 flex flex-col justify-center items-center">
      <h1 className="text-lg text-center font-bold font-mono">
        Order Product from List
      </h1>
      <button
        onClick={handleOrder}
        className="bg-blue-500 shadow-lg shadow-sky-400 hover:bg-sky-500 text-slate-50 py-2 px-4 text-center text-xl font-serif font-semibold rounded-md border-none"
      >
        Add to Cart
      </button>
    </div>
  );
}
