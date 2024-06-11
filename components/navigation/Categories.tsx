"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Camera, Laptop, Smartphone, Menu } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    category: "Camera",
    href: "/shop/cameras",
    icon: <Camera className="mr-2 inline-flex" />,
  },
  {
    category: "Laptop",
    href: "/shop/laptops",
    icon: <Laptop className="mr-2 inline-flex" />,
  },
  {
    category: "Monitor",
    href: "/shop/monitors",
    icon: <Smartphone className="mr-2 inline-flex" />,
  },
];

const Categories = () => {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg">
              <Menu className="mr-2 inline-flex" />
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent className="shadow-2xl">
              {categories.map((category) => (
                <Link
                  href={category.href}
                  key={category.category}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} `}
                  >
                    {category.icon} {category.category}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Categories;
