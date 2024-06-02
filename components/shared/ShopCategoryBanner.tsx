"use client";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const ShopCategoryBanner = () => {
  const pathname = usePathname();
  let category ;
  let brand ;

  switch (true) {
    case pathname.includes("/monitors/samsung"):
      category = "Monitor";
      brand = "Samsung";
      break;
    case pathname.includes("/laptops/dell"):
      category = "Laptop";
      brand = "Dell";
      break;
    case pathname.includes("/laptops/hp"):
      category = "Laptop";
      brand = "HP";
      break;
    case pathname.includes("/laptops/apple"):
      category = "Laptop";
      brand = "Apple";
      break;
    case pathname.includes("/cameras/nikon"):
      category = "Camera";
      brand = "Nikon";
      break;
    case pathname.includes("/cameras/canon"):
      category = "Camera";
      brand = "Canon";
      break;
    case pathname.includes("/cameras/sony"):
      category = "Camera";
      brand = "Sony";
      break;
    default:
      category = "";
      brand = "";
  }

  return (
    <div className="bg-secondary min-h-32 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-primary">Shop</h1>
      <div className="flex items-center font-semibold gap-1 mt-2">
        <p>{category}</p>
        <p>
          <ChevronRight />
        </p>
        <p className="text-destructive">{brand}</p>
      </div>
    </div>
  );
};

export default ShopCategoryBanner;
