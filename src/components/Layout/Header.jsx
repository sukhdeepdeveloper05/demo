import Image from "next/image";
import Link from "next/link";
import data from "@/assets/data";
import NavLink from "./NavLink.jsx";
import MobileNav from "./MobileNav.jsx";

export default function Header() {
  const { logo, navLinks } = data;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-14 flex items-center justify-center lg:justify-between w-full">
      <Link href={"/"} className="relative z-50">
        <figure>
          <Image
            src={logo.small}
            alt="House On The Clouds"
            className="w-52 lg:w-64"
            priority
          />
        </figure>
      </Link>
      <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map((item) => {
          return (
            <NavLink key={item.handle} href={item.handle} item={item}>
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      <MobileNav navLinks={navLinks} />
    </header>
  );
}
