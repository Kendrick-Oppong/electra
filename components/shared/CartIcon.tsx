"use client";
import { Camera, Laptop, Monitor } from "@/types";
import { ShoppingCart,Trash } from "lucide-react";
import ToolTipPopUp from "@/components/shared/ToolTipPopUp";
import {
  addCart,
  getAllLocalStorageCartProduct,
  removeCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

type ProductType = Camera | Laptop | Monitor;

const CartIcon = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();
  const localStorageItems = useAppSelector(getAllLocalStorageCartProduct);


  const handleAddToCart = (product:ProductType) => {
    dispatch(addCart(product));
  };
  const handleRemoveCart = (product:ProductType) => {
    dispatch(removeCart(product._id));
  };


  return (
    <>
      {localStorageItems?.find(item=>item._id === product._id) ? (
        <div
          role="button"
          className="cursor-pointer rounded-full border p-1.5 border-destructive text-destructive"
          onClick={() => handleRemoveCart(product)}
        >
          <ToolTipPopUp id="#cartoff" content="Remove From Cart" />
          <Trash id="cartoff" size={17} />
        </div>
      ) : (
        <div
          role="button"
          className="cursor-pointer rounded-full border border-secondary p-1.5 hover:border-destructive hover:text-destructive"
          onClick={() => handleAddToCart(product)}
        >
          <ToolTipPopUp id="#heart" content="Add To Cart" />
          <ShoppingCart id="heart" size={17} />
        </div>
      )}
    </>
  );
};

export default CartIcon;
