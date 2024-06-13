"use client";
import { Camera, Laptop, Monitor } from "@/types";
import { Heart } from "lucide-react";
import ToolTipPopUp from "@/components/shared/ToolTipPopUp";
import { addFavorite } from "@/redux/features/favoriteSlice";
import { useAppDispatch } from "@/redux/hooks";

type ProductType = Camera | Laptop | Monitor;

const FavoriteIcon = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();

  const handleAddToFavorite = () => {
    dispatch(addFavorite(product));
  };

  return (
    <div
      role="button"
      className="cursor-pointer rounded-full border border-secondary p-1.5 hover:border-destructive hover:text-destructive"
      onClick={handleAddToFavorite}
    >
      <ToolTipPopUp id="#heart" content="Add To Favorite" />
      <Heart id="heart" size={17} />
    </div>
  );
};

export default FavoriteIcon;
