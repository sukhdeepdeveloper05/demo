"use client";

import { useEffect, useState } from "react";
import data from "@/assets/data.js";
import GallerySection from "@/components/Sections/Gallery.jsx";
import WeddingsSection from "@/components/Sections/Weddings.jsx";
import HomeVideoSection from "@/components/Sections/HomeVideo.jsx";
import PrimaryBtn from "@/components/UI/PrimaryBtn.jsx";
import CustomImage from "@/components/UI/CustomImage.jsx";
import Image from "next/image";

export default function HomePage() {
  const { home, fineArtSecImg } = data;

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.scrollY);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="page-content">
      <section className="hero h-svh flex items-center justify-center flex-col overflow-hidden relative -z-20">
        <figure
          className="fixed top-[0px] bottom-0 left-0 right-0 -z-20 h-svh"
          style={{ top: `-${scrollY / 2}px` }}
        >
          <Image
            src={home.hero.image}
            alt="Hero image"
            className="object-cover object-[50%23%] h-full w-full"
            priority
          />
        </figure>
        <div
          className="overlay fixed top-0 left-0 right-0 h-svh w-full -z-[15] bg-black bg-opacity-30"
          style={{ top: `-${scrollY / 2}px` }}
        />
      </section>

      <div className="bg-site-background">
        <section className="home-sec1 grid gap-[11px]">
          <figure className="home-sec1__img1 flex">
            <CustomImage
              src={home.sec1.image1}
              className="w-full h-full object-contain"
              alt=""
            />
          </figure>
          <figure className="home-sec1__img2 flex">
            <CustomImage
              src={home.sec1.image2}
              className="w-full h-full object-contain"
              alt=""
            />
          </figure>
          {/* <h2 className="home-sec1__heading text-center">{homeSec1.heading}</h2> */}
          <figure className="home-sec1__heading-img">
            <CustomImage
              src={home.sec1.headingImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="home-sec1__desc flex flex-col gap-2">
            {home.sec1.descriptions.map((desc, index) => {
              return <p key={index}>{desc}</p>;
            })}
          </div>
        </section>

        <GallerySection />

        <WeddingsSection />

        <HomeVideoSection />

        <section
          className="py-[9svmax] px-10 md:px-16 bg-[40%_30%] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 45%), rgb(0 0 0 / 45%)), url(${fineArtSecImg.src})`,
          }}
        >
          <div className="md:max-w-[29.5vw]">
            <h2 className="text-secondary">
              The
              <br />
              Fine-Art Classic
            </h2>
            <p className="text-secondary my-6 text-xs">
              Ibtida is our finest offering with fine-art editorial style
              photography lead by Siddharth Sharma, founder of House On The
              Clouds. The essence of Ibtida is to create photographs that stand
              the test of time. The classic, non-intrusive approach of
              documenting the most important day of your life with bright and
              airy images that take you back in time. This is an exclusive
              package which we offer to selected weddings only and we believe
              this deserves a website of its own. Click below to visit Ibtida.Co
            </p>
          </div>
          <PrimaryBtn
            href={"https://www.ibtida.co"}
            target="_blank"
            className=""
          >
            Visit Ibtida.co
          </PrimaryBtn>
        </section>
      </div>
    </main>
  );
}
