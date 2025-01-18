import data from "@/assets/data";
import Input from "@/components/UI/Input.jsx";

export default function ContactForm() {
  const { contact } = data;

  return (
    <form
      action="/"
      className="bg-white md:max-w-[53%] max-w-[90%] w-full min-h-svh mx-auto rounded-3xl md:px-12 px-6 py-8 mt-10 flex flex-col gap-4"
    >
      {contact.form.items.map((item, index) => {
        return item.type !== "checkbox" ? (
          <Input item={item} key={index} />
        ) : (
          <div key={index} className="flex flex-col gap-1.5">
            <p>
              {item.label}
              {item.required === true && (
                <span className="text-link-primary text-xs ml-1">
                  (Required)
                </span>
              )}
            </p>
            {item.options.map((option, i) => {
              return (
                <label className="flex items-center justify-start gap-4 cursor-pointer">
                  <input
                    key={item.id}
                    type={item.type}
                    name={item.id}
                    id={item.id}
                    value={option}
                    className="p-3 outline-none border border-link-primary bg-[#fafafa] hover:bg-[#ffffff] focus-within:bg-[#ffffff] transition-colors"
                  />
                  <p>{option}</p>
                </label>
              );
            })}
          </div>
        );
      })}
      <button
        type="submit"
        className="w-min bg-black text-white px-6 py-2.5 text-sm rounded-md mt-4"
      >
        Submit
      </button>
    </form>
  );
}
