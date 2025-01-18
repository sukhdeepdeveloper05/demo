import data from "@/assets/data";
import Card from "@/components/UI/Card.jsx";

export const metadata = {
  title: "Weddings | House On The Clouds",
};

export default function WeddingsPage() {
  const { weddings } = data;

  return (
    <main className="page-content mt-headerHeight">
      <div className="container">
        <div>
          <span>All | </span>
          <span>International | </span>
          <span>Indian</span>
        </div>

        <div className="bg-white pt-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8 ">
          {weddings.slice(0, 4).map((item) => {
            return <Card item={item} key={item.handle} />;
          })}
        </div>
      </div>
    </main>
  );
}
