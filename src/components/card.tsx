export function Card({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mb-9 flex flex-col justify-center items-center bg-slate-300 flex-auto min-h-full shadow-slate-400 shadow-lg text-red-500 py-3 px-4">
        {children}
      </div>
    </>
  );
}
