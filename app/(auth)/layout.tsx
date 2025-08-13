"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "forgot password", href: "/forgotpassword" },
];
export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <div className="flex  flex-col justify-center items-center ">
        <nav className="flex my-6 w-fit bg-slate-400 flex-col px-4 py-10 rounded-ss-2xl rounded-ee-xl justify-center items-center gap-2">
          {navLinks.map((link, index) => {
            const isActive =
              pathName === link.href ||
              (pathName.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                key={index}
                className={`font-sans font-semibold text-lg text-center w-60 border-none rounded-full py-1 px-4 
                    ${
                      isActive
                        ? "bg-blue-600 text-slate-100"
                        : "bg-blue-500  text-slate-50 "
                    }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {children}
      </div>
    </>
  );
}
