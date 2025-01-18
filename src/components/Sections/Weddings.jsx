import data from "@/assets/data";
import Card from "../UI/Card.jsx";
import PrimaryBtn from "../UI/PrimaryBtn.jsx";

export default function WeddingsSection() {
  const { weddings } = data;

  return (
    <section className="weddings-section py-section-gap px-[6vw] md:px-[4vw]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-1.5 gap-y-8 ">
        {weddings.slice(0, 4).map((item) => {
          return <Card item={item} key={item.handle} />;
        })}
      </div>
      <div className="text-center py-8">
        <PrimaryBtn href="/weddings">More Weddings</PrimaryBtn>
      </div>
    </section>
  );
}
