
"use client"
import { useState } from "react";
import {YoutubeVideoPlayer} from "@/components/shared"
import ImageGallery from "react-image-gallery";
import Image from "next/image"
import "react-image-gallery/styles/css/image-gallery.css";

import { Camera, Laptop, Monitor } from "@/types";
type ProductType = Camera | Laptop | Monitor;

const ProductDetailImageGallery = ({ product }: { product: ProductType }) => {
  const mainImage = product.images.primaryImage;
  const otherImages = product.images.otherImages ?? [];
  const allImages = [mainImage, ...otherImages];
  const [mainImageUrl, setMainImageUrl] = useState(mainImage);
  const [showGallery, setShowGallery] = useState(false);

  const images =
    allImages &&
    allImages.map((image) => ({ original: image, thumbnail: image }));

  const handleImageClick = (newUrl: string) => {
    setMainImageUrl(newUrl);
  };

  return (
    <>
      <div className="relative rounded-lg border border-primary p-1">
        <Image
          src={mainImageUrl}
          width={300}
          height={300}
          alt=""
          priority
          sizes="(min-width: 768px) 500px, 100vw"
          className="mx-auto w-[250px] cursor-pointer lg:w-[300px] xl:w-[400px]"
          onClick={() => setShowGallery(true)}
        />
      </div>
      <div className="mt-8 flex justify-center items-center gap-3">
        {allImages &&
          allImages.map((img) => (
            <div
              key={img}
              className="rounded-lg border border-primary p-2"
              onClick={() => handleImageClick(img)}
            >
              <Image width={60} height={60} priority src={img} alt="" className="w-[50px] md:w-[60px] cursor-pointer"/>
            </div>
          ))}

        <div className="flex justify-center rounded-lg border border-primary p-2 text-primary">
          {product.videoUrl && <YoutubeVideoPlayer url={product.videoUrl} />}
        </div>
      </div>
      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
          <div className="relative w-full max-w-6xl">
            <ImageGallery
              items={images}
              showThumbnails
              onClick={() => setShowGallery(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailImageGallery;
