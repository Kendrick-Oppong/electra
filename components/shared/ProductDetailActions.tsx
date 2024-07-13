"use client"
import { ShoppingCart, CreditCard, Trash } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import {
  addCart,
  getAllLocalStorageCartProduct,
  removeCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Camera, Laptop, Monitor } from "@/types";
type ProductType = Camera | Laptop | Monitor;


const ProductDetailActions = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();
  const localStorageItems = useAppSelector(getAllLocalStorageCartProduct);

  const handleAddCart = (product: ProductType) => {
      dispatch(addCart(product));
  };

  const handleRemoveCart = (product: ProductType) => {
    dispatch(removeCart(product._id));
  };
  return (
    <>

     {localStorageItems?.find(item=>item._id === product._id) ? (
        <ButtonLink type="button" className="bg-destructive flex-1 hover:bg-destructive hover:text-white hover:border-none" onClick={() => handleRemoveCart(product)}>
       Remove  <Trash className="ml-2 inline-flex" />
      </ButtonLink>
      ) : ( 
        <ButtonLink type="button" className="flex-1"  onClick={() => handleAddCart(product)}>
        Add to cart <ShoppingCart className="ml-2 inline-flex" />
      </ButtonLink>
        
      )}

      <ButtonLink type="button" className="flex-1">
        Buy now <CreditCard className="ml-2 inline-flex" />
      </ButtonLink>
    </>
  );
};

export default ProductDetailActions;
