"use client";

import { motion } from "motion/react";

import data from "@/assets/data";

export default function Socials({
  animation = false,
  containerClasses = "",
  itemsClasses = "",
}) {
  const { socials } = data;

  return (
    <motion.div
      initial={animation && { y: "100%", opacity: 0 }}
      animate={animation && { y: "0%", opacity: 1 }}
      exit={animation && { y: "100%", opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className={`flex items-center justify-center gap-4${containerClasses}`}
    >
      <a
        href={socials.instagram.href}
        className={`block text-primary${itemsClasses}`}
        target="_blank"
      >
        {socials.instagram.icon}
      </a>
      <a
        href={socials.facebook.href}
        className={`block text-primary${itemsClasses}`}
        target="_blank"
      >
        {socials.facebook.icon}
      </a>
      <a
        href={socials.twitter.href}
        className={`block text-primary${itemsClasses}`}
        target="_blank"
      >
        {socials.twitter.icon}
      </a>
    </motion.div>
  );
}
