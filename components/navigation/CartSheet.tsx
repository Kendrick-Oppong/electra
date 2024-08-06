"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { getAllLocalStorageCartProduct } from "@/redux/features/cartSlice";
import { ButtonLink } from "@/components/shared";
import Link from "next/link";

interface CartSheetProps {
  children: React.ReactNode;
}

const CartSheet: React.FC<CartSheetProps> = ({ children }) => {
  const cartItems = useAppSelector(getAllLocalStorageCartProduct);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg font-bold">
            Your Cart <span>({cartItems.length} items)</span>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea
          className="h-[26rem] sm:h-[30rem] lg:h-[32rem]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="mt-8">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="mb-4 flex items-center gap-4">
                  <div>
                    <Image
                      src={item.images.primaryImage}
                      width={50}
                      height={50}
                      className="h-[50px] w-[50px] object-scale-down"
                      quality={100}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h2 className="truncate text-base font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium text-destructive">
                      <span className="font-bold">{item.quantity}</span> × $
                      {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-[5rem] flex flex-col items-center justify-center">
                <ShoppingCart size={50} className="mx-auto text-primary" />
                <h2 className="my-4">No product found</h2>
                <h2>Browse products to add to cart</h2>
              </div>
            )}
          </div>
        </ScrollArea>
        {cartItems.length > 0 && (
          <SheetFooter className="mt-[30px] flex-wrap items-center !justify-center gap-3 sm:mt-[50px] md:flex-nowrap lg:mt-[15px]">
            <SheetClose asChild className="flex">
              <Link href="/dashboard/cart" className="flex-1 sm:flex-none">
                <ButtonLink type="button" className="mt-0 w-full flex-1">
                  View Cart
                </ButtonLink>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/" className="flex-1 sm:flex-none">
                <ButtonLink type="button" className="!mx-0 mt-0 w-full">
                  Checkout
                </ButtonLink>
              </Link>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
