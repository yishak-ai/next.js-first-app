"use client";
import "./globalError.css";

export default function GlobalErrorPage({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-3xl font-bold font-mono text-blue-600">Error</h1>
          <p className="text-lg">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className=" bg-slate-600 text-slate-50 rounded-md px-4 py-2  "
          >
            refresh
          </button>
        </div>
      </body>
    </html>
  );
}
