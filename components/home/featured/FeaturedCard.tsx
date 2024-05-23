import React from "react";
import ProductRating from "../../shared/ProductRating";
import Image from "next/image";
import { Camera } from "@/types/cameraSchema";
import { Laptop } from "@/types/laptopSchema";
import { Monitor } from "@/types/monitorSchema";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import ToolTipPopUp from "@/components/shared/ToolTipPopUp";
import LazyLoadImage from "../../shared/LazyLoadImage";
import ImagePlaceholderSkeleton from "../../shared/ImagePlaceholderSkeleton";

type ProductType = Camera | Laptop | Monitor;

const FeaturedCard = ({ product }: { product: ProductType }) => {
  const mainImage = product.images.primaryImage;
  const originalPrice = Math.round(product.price * 1.5);
  const discountedPrice = product.price;

  return (
    <div className="relative border border-primary rounded-lg p-3 text-center shadow-lg">
      <LazyLoadImage
        src={mainImage}
        placeholder={<ImagePlaceholderSkeleton />}
        imageClassName="w-44 h-44 mx-auto cursor-pointer"
      />

      {/* <Image
        src={mainImage}
        alt=""
        // placeholder="blur"
        // blurDataURL={blurData}
        quality={80}
        width={200}
        height={200}
        sizes="100vw"
        className={`w-44 h-44 mx-auto cursor-pointer`}
        priority
      /> */}

      <h2 className="font-bold my-4 cursor-pointer">{product.title}</h2>
      <ProductRating rating={product.rating} />
      <div className="flex justify-between items-center px-4 my-4">
        <p className="font-bold text-destructive my-3 text-xl">
          ${discountedPrice}{" "}
          <span className="text-secondary dark:text-primary dark:opacity-50 line-through font-normal ml-2 text-lg">
            {" "}
            ${originalPrice}
          </span>
        </p>
        <div className="bg-accent hover:bg-destructive text-destructive hover:text-white p-2 rounded-lg cursor-pointer">
          <ToolTipPopUp id="#addToCart" content="Add To Cart" />
          <ShoppingCart size={30} id="addToCart" />
        </div>
      </div>

      <div className="absolute right-4 top-5 flex flex-col gap-5">
        <div className="rounded-full border border-secondary p-1.5 hover:border-destructive hover:text-destructive cursor-pointer">
          <ToolTipPopUp id="#heart" content="Add To Favorite" />
          <Heart id="heart" size={17} />
        </div>
        <div className="rounded-full border border-secondary p-1.5 hover:border-destructive hover:text-destructive cursor-pointer">
          <ToolTipPopUp id="#eye" content="Quick View" />
          <Eye id="eye" size={17} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
