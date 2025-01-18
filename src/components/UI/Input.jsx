export default function Input({ item }) {
  return (
    <label htmlFor={item.id} className="flex flex-col gap-1.5">
      <p>
        {item.label}
        {item.required === true && (
          <span className="text-link-primary text-xs ml-1">(Required)</span>
        )}
      </p>
      {item.type !== "textarea" ? (
        <input
          type={item.type}
          name={item.id}
          id={item.id}
          className="w-full p-3 outline-none border border-link-primary bg-[#fafafa] hover:bg-[#ffffff] focus-within:bg-[#ffffff] transition-colors"
        />
      ) : (
        <textarea
          type={item.type}
          name={item.id}
          id={item.id}
          className="w-full p-3 outline-none border border-link-primary bg-[#fafafa] hover:bg-[#ffffff] focus-within:bg-[#ffffff] transition-colors"
          rows={3}
        />
      )}
    </label>
  );
}
