import PrimaryBtn from "@/components/UI/PrimaryBtn";

export default function NotFoundPage() {
  return (
    <main className="page-content mt-headerHeight text-center min-h-[calc(100svh-var(--headerHeight)-var(--footerHeight))] flex flex-col items-center justify-center max-md:max-w-[90%] mx-auto">
      <h2 className="max-md:text-5xl">404 not found!</h2>
      <p className="text-2xl max-md:text-base">Could not find Page or Resource you are looking for.</p>
      <PrimaryBtn href={"/"} className={"mt-4"}>Go To Home</PrimaryBtn>
    </main>
  );
}
