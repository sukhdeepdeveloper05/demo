import data from "@/assets/data";
import PrimaryBtn from "@/components/UI/PrimaryBtn.jsx";

export const metadata = {
  title: "Photography Investment | House On The Clouds",
};

export default function PhotographyInvestment() {
  const { photographyInvestments } = data;

  return (
    <main className="page-content mt-headerHeight px-section-gap max-w-[max(1024px,90vw)] mx-auto">
      <h4 className="uppercase text-center py-14 text-primary">
        Check out our Wedding <b>photography</b> Packages
      </h4>

      <section className="flex items-center justify-center flex-wrap gap-3">
        {photographyInvestments.map((plan) => {
          return (
            <div
              key={plan.name}
              className={`flex flex-col items-center justify-center bg-white max-w-[400px] min-w-[320px] xl:w-[30%] md:w-[48%] w-[90%] md:min-h-[440px] min-h-[400px] md:px-8 md:py-16 px-6 py-12 gap-8${
                plan.name === "Elite" ? " xl:md:min-h-[calc(440px+2vw)]" : ""
              }`}
            >
              <h6 className="uppercase font-bold">{plan.name}</h6>
              <div className="flex flex-col gap-2 text-center">
                {plan.benifits.map((benifit) => {
                  return (
                    <p
                      key={benifit.title}
                      className={`text-paragraphMediumColor${
                        benifit.isBold === true ? " font-bold" : ""
                      }`}
                    >
                      {benifit.title}
                    </p>
                  );
                })}
              </div>
              <p>{plan.price}</p>
            </div>
          );
        })}
        <div className="w-full text-center mt-8">
          <PrimaryBtn href={"/contact"} className={"uppercase font-bold"}>
            Create custom Plan
          </PrimaryBtn>
        </div>
      </section>
    </main>
  );
}
