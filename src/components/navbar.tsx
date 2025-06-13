import Image from "next/image";
import Link from "next/link";
import NavItem from "./partials/nav-item";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Guestbook", href: "/guestbook" },
  ];

  return (
    <div className="w-full flex justify-center items-center fixed top-3">
      <nav className="border border-white/10 bg-black/70 backdrop-blur rounded-3xl px-4 flex justify-between space-x-2 items-center overflow-hidden z-50">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>
        </div>
        <div className="flex">
          {navItems.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}
        </div>
      </nav>
    </div>
  );
}
