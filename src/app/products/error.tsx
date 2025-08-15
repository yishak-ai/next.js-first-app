"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1>{error.message}</h1>
      <button
        onClick={() => reload()}
        className="bg-slate-400 text-slate-50 rounded-md px-4 py-2 font-serif font-semibold"
      >
        Tray Again
      </button>
    </div>
  );
}
