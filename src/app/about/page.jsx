import data from "@/assets/data";
import CustomImage from "@/components/UI/CustomImage.jsx";
import PrimaryBtn from "@/components/UI/PrimaryBtn";

export const metadata = {
  title: "About | House On The Clouds",
};

export default function AboutPage() {
  const { about } = data;

  return (
    <main className="page-content">
      <figure className="h-[66vh] relative">
        <CustomImage
          priority
          src={about.images.main}
          alt=""
          className="w-full h-full object-cover object-[50%_70%]"
        />
        <div className="overlay h-full w-full absolute inset-0 bg-black bg-opacity-20" />
      </figure>

      <section className="flex flex-col items-center justify-center gap-2 md:mt-24 mt-12 mb-8 max-w-[35%] mx-auto text-center">
        <h5>{about.sec1.heading}</h5>
        <p className="text-paragraphMediumColor">{about.sec1.para}</p>
      </section>

      <section className="flex flex-col items-center justify-center gap-2 mb-12 max-w-[35%] mx-auto text-center">
        <h5>{about.sec2.heading}</h5>
        <p className="text-paragraphMediumColor">{about.sec2.para}</p>
      </section>
      <section className="flex items-center justify-center gap-2 mb-12 max-w-[50%] mx-auto text-center">
        {about.images.gridImages.map((image) => {
          return (
            <figure className="relative overflow-hidden aspect-square">
              <CustomImage
                src={image}
                alt=""
                className="w-full h-full object-cover"
                priority
              />
              <div className="overlay h-full w-full absolute inset-0 bg-black bg-opacity-20" />
            </figure>
          );
        })}
      </section>

      <section className="flex items-center justify-center mt-4 mb-24">
        <PrimaryBtn href={"/weddings"} className="uppercase">
          View the collection
        </PrimaryBtn>
      </section>
    </main>
  );
}
