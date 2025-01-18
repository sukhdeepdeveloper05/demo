import data from "@/assets/data";

export const metadata = {
  title: "FAQs | House On The Clouds",
};

export default function FAQsPage() {
  const { faqs } = data;

  return (
    <main className="page-content mt-headerHeight">
      <section className="grid md:grid-cols-2 md:py-20 max-md:max-w-[85%] max-md:mx-auto">
        <h3 className="md:text-center md:mb-0 mb-12 text-4xl">FAQs</h3>
        <div className="flex flex-col md:gap-16 gap-8 md:max-w-[85%] max-md:mx-auto">
          {faqs.map((faq, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <h4 className="font-bold">{faq.question}</h4>
                <p className="text-paragraphMediumColor">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
