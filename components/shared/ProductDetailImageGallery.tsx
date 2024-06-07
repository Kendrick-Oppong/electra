
"use client"
import { useState } from "react";
import { Camera, Laptop, Monitor } from "@/types";
import {YoutubeVideoPlayer} from "@/components/shared"
import ImageGallery from "react-image-gallery";
import Image from "next/image"
import "react-image-gallery/styles/css/image-gallery.css";

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
      <div className="relative">
        <Image
        src={mainImageUrl}
        width={500}
        height={500}
        alt=""
        className="mx-auto cursor-pointer"
        onClick={() => setShowGallery(true)}
        />
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {allImages &&
          allImages.map((img) => (
            <div
              key={img}
              className="rounded-lg border border-primary p-2"
              onClick={() => handleImageClick(img)}
            >
              <Image width={70} height={70} src={img} alt=""/>
            </div>
          ))}

        <div className="rounded-lg border border-primary p-2 text-primary">
      {product.videoUrl && <YoutubeVideoPlayer url={product.videoUrl}/>}
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
