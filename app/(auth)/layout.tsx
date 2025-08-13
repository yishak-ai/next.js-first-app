"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <>
      <div>
        <ul>
          {links.map((link, index) => {
            const isactive =
              pathname === link.href ||
              (pathname === link.href && pathname !== "/");
            return (
              <Link
                key={index}
                className={`text-lg ${
                  isactive ? "text-blue-600" : "text-slate-600"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
        {children}
      </div>
    </>
  );
}
