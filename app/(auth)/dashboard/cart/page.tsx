"use client";
import Link from "next/link";
import { useState } from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { ProductQuantitySelector, ButtonLink } from "@/components/shared";
import {
  getAllLocalStorageCartProduct,
  removeCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Input } from "@/components/ui/input";

export default function CartPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getAllLocalStorageCartProduct);
  const filteredcart = cartItems.filter((item: { title: string }) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
           {filteredcart.length > 0 && (
            <Link href="/checkout">
              <ButtonLink className="w-full">Proceed to Checkout</ButtonLink>
            </Link>
          )}
          <Input
            type="search"
            value={searchQuery}
            placeholder="Filter by title"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
           

          {/* Show message if no items match the search query */}
          {filteredcart.length === 0 ? (
            <h2 className="my-4 text-center">No product found</h2>
          ) : (
            filteredcart.map((item) => (
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
                      ${item.price * item.quantity} - {item.quantity} items
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
            ))
          )}

          {filteredcart.length > 0 && (
            <Link href="/checkout">
              <ButtonLink className="w-full">Proceed to Checkout</ButtonLink>
            </Link>
          )}
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
