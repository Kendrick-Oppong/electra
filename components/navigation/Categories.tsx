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
import Link from "next/link"

const categories = [
  { category: "Camera", icon: <Camera className="inline-flex mr-2" /> },
  { category: "Laptop", icon: <Laptop className="inline-flex mr-2" /> },
  { category: "Monitor", icon: <Smartphone className="inline-flex mr-2" /> },
  // { category: "Watch", icon: <Watch className="inline-flex mr-2" /> },
];

const Categories = () => {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg">
              <Menu className="inline-flex mr-2" />
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent className="shadow-2xl ">
              {categories.map((category) => (
                <Link href="" key={category.category} legacyBehavior passHref>
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
