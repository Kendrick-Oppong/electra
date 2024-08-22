"use client";
import Link from "next/link";
import {
  ShoppingCart,
  LayoutDashboard,
  ChevronsUp,
} from "lucide-react";
import { ToolTipPopUp } from "@/components/shared";
import { GlobalSearch } from "@/components/navigation";
import { CartSheet } from ".";

const SideNavigation = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside className="fixed bottom-0 right-1 top-0 z-[1000] flex flex-col justify-center self-center justify-self-center">
      <div className="relative divide-y-4 text-white">
        <CartSheet>
          <div className="bg-primary p-1 dark:bg-primary">
            <ToolTipPopUp id="#cart" content="Cart" />
            <ShoppingCart size={27} id="cart" className="cursor-pointer" />
          </div>
        </CartSheet>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#dashboard" content="Dashboard" />
          <Link href="/dashboard/cart">
            <LayoutDashboard
              size={27}
              id="dashboard"
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#search" content="Search" />
          <GlobalSearch />
        </div>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#scroll-to-top" content="Scroll To Top" />
          <ChevronsUp
            size={28}
            id="scroll-to-top"
            className="animate-bounce-slow cursor-pointer"
            onClick={handleScrollToTop}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
