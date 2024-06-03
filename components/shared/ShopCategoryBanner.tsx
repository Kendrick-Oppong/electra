"use client";
import { getShopCategoryBanner } from "@/lib/getShopCategoryBanner";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const ShopCategoryBanner = () => {
  const pathname = usePathname();
  const { bgUrl, brand, category } = getShopCategoryBanner(pathname);

  return (
    <div
      className={`flex flex-col items-center justify-center ${bgUrl} bg-cover bg-center bg-no-repeat`}
    >
      <div className="flex h-full min-h-64 w-full flex-col items-center justify-center bg-[#00000065] text-white backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-primary">Shop</h1>
        <div className="mt-2 flex items-center gap-1 text-xl font-semibold">
          <p>{category}</p>
          <p>
            <ChevronRight />
          </p>
          <p className="text-destructive">{brand}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopCategoryBanner;
