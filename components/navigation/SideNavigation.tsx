"use client";
import {
  Menu,
  ShoppingCart,
  User,
  Eye,
  ChevronsUp,
  Search,
} from "lucide-react";
import { Tooltip } from "react-tooltip";
const SideNavigation = () => {
  return (
    <aside className="fixed flex flex-col justify-center right-1  top-0 bottom-0 ">
      <div className="relative  text-white divide-y-4">
        <div className="bg-primary p-1">
          <Tooltip
            anchorSelect="#menu"
            content="Categories"
            place="left"
            className="dark:!bg-primary "
          />
          <Menu size={27} id="menu" />
        </div>
        <div className="bg-primary dark:bg-primary p-1">
          <Tooltip
            anchorSelect="#cart"
            content="Cart"
            place="left"
            className="dark:!bg-primary "
          />
          <ShoppingCart size={27} id="cart" />
        </div>
        <div className="bg-primary p-1">
          <Tooltip
            anchorSelect="#profile"
            content="Profile"
            place="left"
            className="dark:!bg-primary "
          />
          <User size={27} id="profile" />
        </div>
               <div className="bg-primary p-1">
          <Tooltip
            anchorSelect="#search"
            content="Search"
            place="left"
            className="dark:!bg-primary "
          />
          <Search size={27} id="search" />
        </div>
        <div className="bg-primary p-1">
          <Tooltip
            anchorSelect="#Recent-views"
            content="Recent views"
            place="left"
            className="dark:!bg-primary "
          />
          <Eye size={27} id="Recent-views" />
        </div>
        <div className="bg-primary p-1">
          <Tooltip
            anchorSelect="#scroll-to-top"
            content="Scroll to top"
            place="left"
            className="dark:!bg-primary "
          />
          <ChevronsUp size={27} id="scroll-to-top" />
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
