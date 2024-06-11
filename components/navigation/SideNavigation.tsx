"use client";
import {
  Menu,
  ShoppingCart,
  User,
  Eye,
  Settings,
  ChevronsUp,
  Search,
} from "lucide-react";
import ToolTipPopUp from "@/components/shared/ToolTipPopUp";

const SideNavigation = () => {

const handleScrollToTop = ()=> {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}

  return (
    <aside className="fixed z-50 flex flex-col justify-center right-1 top-0 bottom-0 ">
      <div className="relative text-white divide-y-4">
        
        <div className="bg-primary dark:bg-primary p-1">
          <ToolTipPopUp id="#cart" content="Cart" />
          <ShoppingCart size={27} id="cart" className="cursor-pointer" />
        </div>
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
          <Eye size={27} id="Recent-views" className="cursor-pointer" />
        </div> 

        <div className="bg-primary p-1">
          <ToolTipPopUp id="#scroll-to-top" content="Scroll To Top" />
          <ChevronsUp size={28} id="scroll-to-top" className="cursor-pointer animate-bounce" onClick={handleScrollToTop}/>
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
