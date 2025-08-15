"use client";

import { useState } from "react";
export function Countor() {
  const [countor, setcountor] = useState(0);

  return (
    <div className="flex flex-col p-4 h-screen gap-5 justify-center items-center bg-slate-400">
      <div className="font-bold text-3xl">Countor: {countor}</div>
      <button
        className="bg-blue-600 border-none rounded-md font-bold font-mono text-lg text-center py-2 px-4 "
        onClick={() => setcountor(countor + 1)}
      >
        Incrimrnt
      </button>
    </div>
  );
}
