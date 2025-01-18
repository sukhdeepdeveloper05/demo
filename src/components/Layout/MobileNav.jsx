"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import NavLink from "./NavLink.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import Socials from "./Socials.jsx";

export default function MobileNav({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`bg-white fixed inset-0 z-40 transition-all`}
          >
            <motion.ul
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={
                isMenuOpen
                  ? "h-[calc(100svh-var(--headerHeight)-120px)] mt-headerHeight relative z-40 flex flex-col items-center justify-center gap-4 transition-all duration-200"
                  : " hidden "
              }
            >
              {navLinks.map((item) => {
                return (
                  <motion.li
                    key={item.handle}
                    className="list-none"
                    variants={linkItemVariants}
                  >
                    <NavLink
                      href={item.handle}
                      item={item}
                      onClick={() => {
                        document.body.classList.remove("overflow-hidden");
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </NavLink>
                  </motion.li>
                );
              })}
            </motion.ul>

            <Socials
              animation={true}
              containerClasses=" my-12"
              itemsClasses=" text-2xl"
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.15,
      delay: 0.25,
    },
  },
};

const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};
