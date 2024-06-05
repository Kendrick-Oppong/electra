import React from "react";
import ProductRating from "./ProductRating";
import { Camera, Laptop, Monitor } from "@/types";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import ToolTipPopUp from "@/components/shared/ToolTipPopUp";
import LazyLoadImage from "./LazyLoadImage";
import ImagePlaceholderSkeleton from "./ImagePlaceholderSkeleton";
import Link from "next/link";

type ProductType = Camera | Laptop | Monitor;

const getLinkUrlCategory = (brand: string) => {
  switch (brand) {
    case "nikon":
    case "sony":
    case "canon":
      return "cameras";
    case "hp":
    case "dell":
    case "apple":
      return "laptops";
    case "samsung":
      return "monitors";
    default:
      return "";
  }
};

const FeaturedCard = ({ product }: { product: ProductType }) => {
  const brand = product.brand.toLowerCase();
  const mainImage = product.images.primaryImage;
  const originalPrice = Math.round(product.price * 1.5);
  const discountedPrice = product.price;

  return (
    <div className="relative rounded-lg border border-primary p-3 pb-24 text-center shadow-lg">
      <Link
        href={`/${getLinkUrlCategory(brand)}/${brand}/${product.title}/${product._id}`}
      >
        <LazyLoadImage
          src={mainImage}
          placeholder={<ImagePlaceholderSkeleton />}
          imageClassName="w-44 h-44 mx-auto cursor-pointer"
        />
      </Link>
      <Link
        href={`/${getLinkUrlCategory(brand)}/${brand}/${product.title}/${product._id}`}
      >
        <h2 className="my-4 cursor-pointer font-bold">{product.title}</h2>
      </Link>

      <div className="mb-5 flex items-center justify-center gap-3">
        <ProductRating rating={product.rating} className="!mx-0" />
        <p>{product.rating}</p>
      </div>

      <div className="absolute bottom-2 left-0 right-0 my-4 flex w-full items-center justify-between px-4">
        <p className="my-3 text-xl font-bold text-destructive">
          ${discountedPrice}{" "}
          <span className="ml-2 text-lg font-normal text-secondary line-through dark:text-primary dark:opacity-50">
            {" "}
            ${originalPrice}
          </span>
        </p>
        <div className="cursor-pointer rounded-lg bg-accent p-2 text-destructive hover:bg-destructive hover:text-white">
          <ToolTipPopUp id="#addToCart" content="Add To Cart" />
          <ShoppingCart size={30} id="addToCart" />
        </div>
      </div>

      <div className="absolute right-4 top-5 flex flex-col gap-5">
        <div className="cursor-pointer rounded-full border border-secondary p-1.5 hover:border-destructive hover:text-destructive">
          <ToolTipPopUp id="#heart" content="Add To Favorite" />
          <Heart id="heart" size={17} />
        </div>
        <div className="cursor-pointer rounded-full border border-secondary p-1.5 hover:border-destructive hover:text-destructive">
          <ToolTipPopUp id="#eye" content="Quick View" />
          <Eye id="eye" size={17} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
