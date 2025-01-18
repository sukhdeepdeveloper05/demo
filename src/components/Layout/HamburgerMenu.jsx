import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function HamburgerMenu({ isMenuOpen, setIsMenuOpen }) {
  const pathname = usePathname();

  return (
    <motion.div
      className={`lg:hidden absolute left-[8vw] z-50 px-1.5 cursor-pointer w-12 h-12 flex flex-col items-center justify-center rounded-md ${
        pathname === "/"
          ? isMenuOpen
            ? "text-black"
            : "text-white delay-300"
          : isMenuOpen
          ? "text-black"
          : "text-black"
      }`}
      onClick={() => {
        if (isMenuOpen) {
          document.body.classList.remove("overflow-hidden");
          setIsMenuOpen(false);
        } else {
          document.body.classList.add("overflow-hidden");
          setIsMenuOpen(true);
        }
      }}
      animate={isMenuOpen ? "open" : "closed"}
    >
      <svg width="35" height="35" viewBox="0 0 35 35">
        <motion.path
          fill="transparent"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          d="M -5 12 L 35 12"
          variants={{
            // closed: { d: "M -5 4 L 35 4" },
            closed: { d: "M -5 12 L 35 12" },
            open: { d: "M 5 30 L 30 5" },
            // open: { d: "M 3 16.5 L 17 2.5" },
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          d="M -5 23 L 35 23"
          variants={{
            // closed: { d: "M -5 14 L 35 14" },
            closed: { d: "M -5 23 L 35 23" },
            open: { d: "M 5 5 L 30 30" },
            // open: { d: "M 3 2.5 L 17 16.346" },
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
      </svg>
    </motion.div>
  );
}
