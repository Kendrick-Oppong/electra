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
import { ShoppingCart, User, View, ChevronsUp, Search } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { getAllLocalStorageCartProduct } from "@/redux/features/cartSlice";
import { ToolTipPopUp, ButtonLink } from "@/components/shared";

const SideNavigation = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cartItems = useAppSelector(getAllLocalStorageCartProduct);

  return (
    <aside className="fixed bottom-0 right-1 top-0 z-50 flex flex-col justify-center">
      <div className="relative divide-y-4 text-white">
        <Sheet>
          <SheetTrigger asChild>
            <div className="bg-primary p-1 dark:bg-primary">
              <ToolTipPopUp id="#cart" content="Cart" />
              <ShoppingCart size={27} id="cart" className="cursor-pointer" />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-lg font-bold">Your Cart</SheetTitle>
            </SheetHeader>
            <ScrollArea
              className="h-[30rem] lg:h-[35rem]"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="mt-8">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="mb-4 flex items-center gap-4"
                    >
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
              <SheetFooter className="items-center gap-3 !justify-center mt-[50px] lg:mt-[15px]">
                <SheetClose asChild>
                  <ButtonLink type="button" className="mt-0 w-full">
                    View Cart
                  </ButtonLink>
                </SheetClose>
                <SheetClose asChild>
                  <ButtonLink type="button" className="mt-0 w-full">
                    Checkout
                  </ButtonLink>
                </SheetClose>
              </SheetFooter>
            )}
          </SheetContent>
        </Sheet>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#profile" content="Profile" />
          <User size={27} id="profile" className="cursor-pointer" />
        </div>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#search" content="Search" />
          <Search size={27} id="search" className="cursor-pointer" />
        </div>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#Recent-views" content="Recent Views" />
          <View size={27} id="Recent-views" className="cursor-pointer" />
        </div>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#scroll-to-top" content="Scroll To Top" />
          <ChevronsUp
            size={28}
            id="scroll-to-top"
            className="animate-bounce cursor-pointer"
            onClick={handleScrollToTop}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
