import data from "@/assets/data";
import Socials from "@/components/Layout/Socials.jsx";
import ContactForm from "@/components/UI/ContactForm.jsx";
import CustomImage from "@/components/UI/CustomImage.jsx";

export const metadata = {
  title: "Contact | House On The Clouds",
};

export default function ContactPage() {
  const { contact } = data;

  return (
    <main className="page-content">
      <figure className="h-[66vh] relative">
        <CustomImage
          priority
          src={contact.image}
          alt=""
          className="w-full h-full object-cover object-[50%_70%]"
        />
        <div className="overlay h-full w-full absolute inset-0 bg-black bg-opacity-20" />
      </figure>

      <section className="flex flex-col items-center justify-center gap-2 md:my-24 my-12">
        <div className="flex flex-col items-center md:max-w-[45%] max-w-[90%] text-center">
          {contact.paras.map((para, index) => {
            return (
              <p key={index} className="text-link-primary my-1">
                {para}
              </p>
            );
          })}
          <p className="mt-2 text-link-primary">{contact.email}</p>
          <p className="mb-2 text-link-primary">{contact.number}</p>
          <p className="mb-10 text-link-primary">{contact.location}</p>
        </div>

        <Socials />

        <ContactForm />
      </section>
    </main>
  );
}
