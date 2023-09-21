import React from "react";
import NextImage from "next/image";

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

const Image = ({ alt, className, src }: Props) => {
  return (
    <NextImage
      alt={alt ? alt : src}
      loading="lazy"
      src={src}
      className={"object-cover aspect-auto w-full " + className && className}
    />
  );
};

export default Image;
