import Link from "next/link";

export default function PrimaryBtn({ children, className, ...props }) {
  return (
    <Link className={`text-xs text-secondary bg-primary-btn px-3.5 pt-3.5 pb-3 rounded hover:bg-primary-btn-hover transition-all ${className}`} {...props}>
      {children}
    </Link>
  );
}
