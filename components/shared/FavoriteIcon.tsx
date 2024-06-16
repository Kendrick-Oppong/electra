"use client";
import { Camera, Laptop, Monitor } from "@/types";
import { Heart, HeartOff } from "lucide-react";
import ToolTipPopUp from "@/components/shared/ToolTipPopUp";
import {
  addFavorite,
  getAllLocalStorageFavoriteProduct,
  removeFavorite,
} from "@/redux/features/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

type ProductType = Camera | Laptop | Monitor;

const FavoriteIcon = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();
  const localStorageItems = useAppSelector(getAllLocalStorageFavoriteProduct);


  const handleAddToFavorite = (product:ProductType) => {
    dispatch(addFavorite(product));
  };
  const handleRemoveFavorite = (product:ProductType) => {
    dispatch(removeFavorite(product._id));
  };


  return (
    <>
      {localStorageItems?.find(item=>item._id === product._id) ? (
        <div
          role="button"
          className="cursor-pointer rounded-full border p-1.5 border-destructive text-destructive"
          onClick={() => handleRemoveFavorite(product)}
        >
          <ToolTipPopUp id="#heartoff" content="Remove From Favorite" />
          <HeartOff id="heartoff" size={17} />
        </div>
      ) : (
        <div
          role="button"
          className="cursor-pointer rounded-full border border-secondary p-1.5 hover:border-destructive hover:text-destructive"
          onClick={() => handleAddToFavorite(product)}
        >
          <ToolTipPopUp id="#heart" content="Add To Wishlist" />
          <Heart id="heart" size={17} />
        </div>
      )}
    </>
  );
};

export default FavoriteIcon;
