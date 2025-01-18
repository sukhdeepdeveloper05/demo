import Link from "next/link";
import CustomImage from "./CustomImage.jsx";

export default function Card({ item }) {
  return (
    <Link href={"/weddings/" + item.handle} className="card cursor-pointer">
      <figure className="aspect-[12/16]">
        <CustomImage
          src={item.thumb}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </figure>
      <div className="mt-2">
        <h6>{item.title}</h6>
        <p className="text-paragraphMediumColor -mt-1.5">{item.date}</p>
      </div>
    </Link>
  );
}
