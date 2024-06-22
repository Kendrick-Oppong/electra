"use client";
import Link from "next/link";
import { ShoppingCart, LayoutDashboard, View, ChevronsUp, Search } from "lucide-react";
import { ToolTipPopUp } from "@/components/shared";
import { CartSheet } from ".";
import { toggleSearch } from "@/redux/features/searchToggleSlice";
import { useAppDispatch } from "@/redux/hooks";

const SideNavigation = () => {
  const dispatch = useAppDispatch();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside className="fixed bottom-0 right-1 top-0 z-50 flex flex-col justify-center self-center justify-self-center">
      <div className="relative divide-y-4 text-white">
        <CartSheet>
          <div className="bg-primary p-1 dark:bg-primary">
            <ToolTipPopUp id="#cart" content="Cart" />
            <ShoppingCart size={27} id="cart" className="cursor-pointer" />
          </div>
        </CartSheet>

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#dashboard" content="Dashboard" />
          <Link href="/cart">
          <LayoutDashboard size={27} id="dashboard" className="cursor-pointer" />
          </Link>
        </div>
        

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#search" content="Search" />
          <Search
            size={27}
            id="search"
            className="cursor-pointer"
            onClick={() => dispatch(toggleSearch())}
          />
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
