"use client"

import React from "react";
import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  getAllLocalStorageCartProduct,
} from "@/redux/features/cartSlice";

const ProductQuantitySelector = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();
  const localStorageItems = useAppSelector(getAllLocalStorageCartProduct);
  const product = localStorageItems.find((item) => item._id === productId);
  const quantity = product ? product.quantity : 1;

  const handleIncrement = () => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(productId));
    }
  };

  return (
  <>
   {product && <div className="relative my-4 flex items-center gap-3">
      <p className="font-semibold">Quantity:</p>
      <div className="relative w-48">
        <Minus
          className="absolute left-1 top-2.5 cursor-pointer"
          onClick={handleDecrement}
        />
        <Input
          type="number"
          value={quantity}
          readOnly
          className="h-11 border-primary text-center"
        />
        <Plus
          className="absolute right-1 top-2.5 cursor-pointer"
          onClick={handleIncrement}
        />
      </div>
      </div>}
      </>
  );
};

export default ProductQuantitySelector;
