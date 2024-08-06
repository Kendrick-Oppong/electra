"use client";
import { useState } from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { ProductDetailActions } from "@/components/shared";
import {
  getAllLocalStorageFavoriteProduct,
  removeFavorite,
} from "@/redux/features/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Input } from "@/components/ui/input";

export default function FavoritePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector(getAllLocalStorageFavoriteProduct);

  const filteredFavorites = favoriteItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  console.log(searchQuery);

  const handleRemoveFavorite = (productId: string) => {
    dispatch(removeFavorite(productId));
  };

  return (
    <div className="space-y-4">
      {favoriteItems.length > 0 ? (
        <>
          <h1 className="font-bold">
            Your Wishlist <span>({favoriteItems.length} items)</span>
          </h1>
          <Input
            type="search"
            value={searchQuery}
            placeholder="Filter by title"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredFavorites.map((item) => (
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
                  <p className="my-2 text-destructive">${item.price}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between pt-4">
                <div>
                  <Trash2
                    className="cursor-pointer text-destructive"
                    size={30}
                    onClick={() => handleRemoveFavorite(item._id)}
                  />
                </div>
                <div className="mt-5 space-x-2 sm:mt-0">
                  <ProductDetailActions product={item} />
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
