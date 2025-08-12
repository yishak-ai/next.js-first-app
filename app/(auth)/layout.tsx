import Link from "next/link";
const navLinks = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "forgotpassword", href: "/forgot password" },
];
export default function Authlayout() {
  return (
    <>
      <div className="flex  flex-col justify-center items-center ">
        <nav className="flex my-6 w-fit bg-slate-400 flex-col px-4 py-10 rounded-ss-2xl rounded-ee-xl justify-center items-center gap-2">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                className="bg-blue-500 w-60 text-center text-slate-50 text-lg font-sans font-semibold border-none rounded-full py-1 px-4  "
                rel="stylesheet"
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
