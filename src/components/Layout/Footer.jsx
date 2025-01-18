import data from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials.jsx";

export default function Footer() {
  const { logo, contact, socials } = data;

  return (
    <footer className="grid md:grid-cols-4 justify-center px-16 md:py-16 py-10 gap-y-8 md:text-left text-center bg-site-background">
      <div className="flex flex-col items-center">
        <figure className="h-32 w-28">
          <Image src={logo.full} alt="" className="w-full h-full object-fill" />
        </figure>
        <Socials />
      </div>
      <div />
      <div>
        <p>Mumbai . Banglore</p>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </div>
      <div>
        <a href={`tel:${contact.number}`} className="block">
          {contact.number}
        </a>
        <a href={`mail:${contact.email}`} className="block">
          {contact.email}
        </a>
      </div>
    </footer>
  );
}
