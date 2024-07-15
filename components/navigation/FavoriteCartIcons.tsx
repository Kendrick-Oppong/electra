"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { getAllLocalStorageCartProduct } from "@/redux/features/cartSlice";
import { getAllLocalStorageFavoriteProduct } from "@/redux/features/favoriteSlice";
import Link from "next/link";

const FavoriteCartIcons = () => {
  const cartItems = useAppSelector(getAllLocalStorageCartProduct);
  const favoriteItems = useAppSelector(getAllLocalStorageFavoriteProduct);

  // trigger re-render to fix hydration
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <div className="relative">
        <Link href="/dashboard/favorite">
          <Heart className="cursor-pointer" size={28} />
          {hasMounted && favoriteItems.length > 0 && (
            <p className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-sm text-white">
              {favoriteItems.length}
            </p>
          )}
        </Link>
      </div>
      <div className="relative">
        <Link href="/dashboard/cart">
          <ShoppingCart className="cursor-pointer" size={28} />
          {hasMounted && cartItems.length > 0 && (
            <p className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-sm text-white">
              {cartItems.length}
            </p>
          )}
        </Link>
      </div>
    </>
  );
};

export default FavoriteCartIcons;
