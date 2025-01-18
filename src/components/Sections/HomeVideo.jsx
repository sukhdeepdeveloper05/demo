import video from "@/assets/Images/video.png";
import CustomImage from "../UI/CustomImage.jsx";

export default function HomeVideoSection() {
  return (
    <section className="home-video-sec relative h-[55svmax] md:h-[50svmax] flex items-center justify-center mb-20">
      <div
        className="absolute bg-fixed inset-0"
        // style={{ backgroundImage: `url(${video.src})` }}
      >
        <CustomImage
          src={video}
          alt=""
          className="object-cover fixed inset-0 w-full h-lvh"
          priority
        />
        <div className="bg-black bg-opacity-20 absolute inset-0" />
      </div>
      <div className="relative text-center md:max-w-[37vw] max-w-[90vw] flex flex-col gap-8">
        <h1 className=" text-secondary">Soul + Cinema</h1>
        <p className="text-secondary">
          Every wedding is unique and so are our films. For past 8 years HOTC
          has set new benchmarks of storytelling within wedding realm and
          beyond. We are fortunate to have experienced so unique cultures and
          traditions across 25 countries and to document stories that
          continuously overwhelm us.
        </p>
      </div>
    </section>
  );
}
