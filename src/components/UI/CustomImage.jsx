"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomImage({
  className,
  loading = "eager",
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Image
      {...props}
      className={`${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-all duration-300${` ${className}`}`}
      onLoad={() => {
        setIsLoaded(true);
      }}
      loading={loading}
    />
  );
}
