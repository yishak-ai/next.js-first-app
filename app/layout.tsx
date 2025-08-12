import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { title } from "process";
export const metadata: Metadata = {
  title: {
    default: "my-next-app1",
    template: "%s next.js",
    absolute: "",
  },
  description: "geneterated by yishak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif  smooth">
        {" "}
        <header className="h-20 flex justify-start items-center  shadow-lg shadow-slate-500 bg-slate-700">
          <p className="ml-3 text-slate-50 text-3xl font-bold">Header</p>
        </header>
        {children}
        <footer className="flex justify-center items-center h-40 bg-slate-700 ">
          <p className=" text-slate-50 text-xl font-mono ">Footer</p>
        </footer>
      </body>
    </html>
  );
}
