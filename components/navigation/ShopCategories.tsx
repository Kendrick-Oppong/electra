"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { categories } from "@/constants/shopCategories";
import Link from "next/link";


const ShopCategories = () => {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg ">
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex gap-6 p-4 shadow-xl">
              {categories.map((category) => (
                <div key={category.category} className="">
                  <h2 className="mb-2 font-bold text-center">
                    {" "}
                    {category.category}
                  </h2>
                  {category.items.map((subCategory) => (
                    <Link
                      key={subCategory.name}
                      href=""
                      legacyBehavior
                      passHref
                      className="w-full "
                    >
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} my-2`}
                      >
                        {subCategory.name}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </div>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default ShopCategories;
