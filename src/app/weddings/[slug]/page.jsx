"use client";

import { use } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import data from "@/assets/data";
import CustomImage from "@/components/UI/CustomImage.jsx";
import WeddingNotFound from "./not-found.jsx";

export default function WeddingPage({ params }) {
  const { slug } = use(params);
  const { weddings } = data;

  const wedding = [...weddings].find((wedding) => wedding.handle === slug);

  if (!wedding) {
    return WeddingNotFound();
  }

  return (
    <main className="page-content mt-headerHeight text-center max-md:max-w-[min(600px,94vw)] max-w-[min(900px,80vw)] mx-auto">
      <div className="mx-auto py-16">
        <h3>{wedding.title}</h3>
        <p>{wedding.description}</p>
      </div>
      <div className="">
        <ResponsiveMasonry columnsCountBreakPoints={{ 900: 2 }}>
          <Masonry className="masonry-wrapper" sequential={true}>
            {wedding.images.map((image, index) => {
              return (
                <figure
                  key={index}
                  className="group overflow-hidden relative after:bg-black after:bg-opacity-0 after:absolute after:inset-0 after:z-10 after:transition-all hover:after:bg-opacity-20 cursor-pointer"
                >
                  <CustomImage
                    src={image}
                    alt=""
                    width={image.width}
                    height={image.height}
                    sizes="100vw"
                    className="group-hover:scale-105"
                  />
                </figure>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </main>
  );
}
