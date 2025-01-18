"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, className, item, ...props }) {
  const pathname = usePathname();

  const isActive = pathname === item.handle;

  return (
    <Link
      className={`cursor-pointer border-b text-2xl lg:text-base ${
        pathname === "/"
          ? isActive
            ? "lg:text-white lg:border-b-white text-primary border-b-primary"
            : "lg:text-link-secondary lg:hover:text-white text-link-primary hover:text-primary border-b-transparent"
          : isActive
          ? "text-primary border-b-primary"
          : "text-link-primary hover:text-primary border-b-transparent"
      } transition-all${" " + className}`}
      prefetch={true}
      {...props}
    >
      {children}
    </Link>
  );
}
