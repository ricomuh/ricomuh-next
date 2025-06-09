"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 duration-200 ${
        isActive
          ? "text-primary-400"
          : "text-gray-200 hover:text-primary-300 overflow-hidden"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-400 blur-sm rounded-full" />
      )}
    </Link>
  );
}
