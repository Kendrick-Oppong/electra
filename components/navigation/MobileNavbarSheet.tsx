"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Categories,
  ShopCategories,
  FavoriteCartIcons,
} from ".";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants/navLinks";
import { ShoppingCart, Menu } from "lucide-react";

export default function MobileNavbarSheet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side="left">
          <header className="relative">
            <nav className="mt-8">
              <div className="">
                <div className="mb-4 flex items-center justify-between text-4xl font-black">
                  <SheetClose asChild>
                    <Link href="/">
                      <h1>
                        {" "}
                        <span>Elec</span>tra
                      </h1>
                    </Link>
                  </SheetClose>
                 
                </div>

                <div className=" ">
                  <div className="relative z-[101] -translate-x-4">
                    <Categories />
                  </div>

                  <ul className="font-medium">
                    <div className="relative z-[100] my-4 -translate-x-4">
                      <ShopCategories />
                    </div>

                    <SignedOut>
                      <SheetClose asChild>
                        <Link
                          href="/sign-in"
                          className={`my-4 transition duration-300 ease-in hover:text-primary`}
                        >
                          <p className="my-4">Sign in</p>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <div className="space-y-4">
                          <FavoriteCartIcons />
                        </div>
                      </SheetClose>
                    </SignedOut>

                    <SignedIn>
                      <SheetClose asChild>
                        <Link
                          href="/dashboard/cart"
                          className={`flex items-center gap-2 font-medium transition duration-300 ease-in hover:text-primary`}
                        >
                          <ShoppingCart /> Dashboard
                        </Link>
                      </SheetClose>
                    </SignedIn>

                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <Link
                          href={link.href}
                          className={`transition duration-300 ease-in hover:text-primary`}
                        >
                          <li className="my-4">{link.label}</li>
                        </Link>
                      </SheetClose>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </SheetContent>
      </Sheet>
    </div>
  );
}
