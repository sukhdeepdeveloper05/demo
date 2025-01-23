import data from "@/assets/data";
import PrimaryBtn from "@/components/UI/PrimaryBtn.jsx";

export const metadata = {
  title: "Cinematography Investment | House On The Clouds",
};

export default function CinematographyInvestmentPage() {
  const { cinematographyInvestments } = data;

  return (
    <main className="page-content mt-headerHeight px-section-gap max-w-[max(1024px,90vw)] mx-auto">
      <h5 className="uppercase text-center py-14">
        Check out our Wedding <b>cinema</b> Pricing Packages
      </h5>

      <section className="flex items-center justify-center flex-wrap gap-3">
        {cinematographyInvestments.map((plan) => {
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
        <div>
          <PrimaryBtn href={"/contact"} className={"uppercase font-bold mt-8"}>Create custom Plan</PrimaryBtn>
        </div>
      </section>
    </main>
  );
}
