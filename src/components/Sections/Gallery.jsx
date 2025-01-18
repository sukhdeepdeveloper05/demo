import data from "@/assets/data";
import CustomImage from "../UI/CustomImage.jsx";

export default function GallerySection() {
  const { gallery } = data;

  return (
    <section className="gallery grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-0.5 px-0.5 py-[8vh] md:py-[5vw]">
      {gallery.map((image, index) => {
        return (
          <figure key={index} className="aspect-square">
            <CustomImage
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-0 transition-all duration-500"
              onLoad={(e) => {
                e.target.style.opacity = "1";
              }}
            />
          </figure>
        );
      })}
    </section>
  );
}
