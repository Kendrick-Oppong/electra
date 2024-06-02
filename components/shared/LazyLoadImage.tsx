"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface LazyLoadImageProps {
  src: string | StaticImport;
  alt?: string;
  placeholder: React.ReactElement;
  imageClassName?: string;
}

const LazyLoadImage = ({
  src,
  alt = "",
  placeholder,
  imageClassName,
}: LazyLoadImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div ref={ref} className="relative">
      {!loaded && placeholder}
      {/* Show the skeleton loader while image is loading */}
      {inView && (
        <Image
          src={src}
          alt={alt}
          quality={80}
          width={200}
          height={200}
          sizes="100vw"
          className={imageClassName}
          onLoad={handleLoad}
          style={{ display: loaded ? "block" : "none" }}
          priority
        />
      )}
    </div>
  );
};

export default LazyLoadImage;
