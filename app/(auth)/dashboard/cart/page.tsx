"use client";
import { Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { ProductQuantitySelector } from "@/components/shared";
import {
  getAllLocalStorageCartProduct,
  removeCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getAllLocalStorageCartProduct);

  const handleRemoveCart = (productId: string) => {
    dispatch(removeCart(productId));
  };

  return (
    <div className="space-y-4">
      {cartItems.length > 0 ? (
        <>
          <h1 className="font-bold">
            Your Cart <span>({cartItems.length} items)</span>
          </h1>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="border-gray divide-y-2 rounded-lg p-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src={item.images.primaryImage}
                    width={70}
                    height={70}
                    alt={item.title}
                  />
                </div>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="my-2 text-destructive">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <Trash2
                    className="cursor-pointer text-destructive"
                    size={30}
                    onClick={() => handleRemoveCart(item._id)}
                  />
                </div>
                <div>
                  <ProductQuantitySelector productId={item._id} />
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="mt-[5rem] flex flex-col items-center justify-center">
          <ShoppingCart size={50} className="mx-auto text-primary" />
          <h2 className="my-4">No product found</h2>
          <h2>Browse products to add to cart</h2>
        </div>
      )}
    </div>
  );
}
