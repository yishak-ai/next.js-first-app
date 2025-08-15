"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { href: "/login", name: "Login" },
    { href: "/register", name: "Register" },
    { href: "/forgotpassword", name: "Forgot Password" },
  ];
  const pathname = usePathname();
  const [name, setName] = useState<string>("");
  return (
    <>
      <div className="flex flex-col m-4 justify-center items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-lg m-4 rounded-md pl-3 ring-sky-600 ring-2 outline-none outline-sky-300 outline-2"
          type="text"
        />
        <ul>
          {links.map((link, index) => {
            const isactive =
              pathname === link.href ||
              (pathname === link.href && pathname !== "/");
            return (
              <Link
                key={index}
                className={`text-lg flex justify-center gap-2 items-center ${
                  isactive ? "text-blue-600" : "text-slate-600"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
        <div>
          {children}-{name}
        </div>
      </div>
    </>
  );
}
