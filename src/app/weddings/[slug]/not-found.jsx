import PrimaryBtn from "@/components/UI/PrimaryBtn.jsx";

export default function WeddingNotFound() {
  return (
    <main className="page-content mt-headerHeight text-center min-h-[calc(100svh-var(--headerHeight)-var(--footerHeight))] flex flex-col items-center justify-center max-md:max-w-[90%] mx-auto">
      <h3 className="text-primary mb-4 max-md:text-3xl">404 not found!</h3>
      <p className="text-2xl max-md:text-base text-paragraphMediumColor">Could not find wedding you are looking for.</p>
      <PrimaryBtn href={"/weddings"} className={"mt-4"}>Explore Weddings</PrimaryBtn>
    </main>
  );
}
