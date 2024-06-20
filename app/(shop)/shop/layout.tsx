import { ShopCategoryBanner } from "@/components/shared";
import {SortProduct} from "@/components/shopLayout";

const ShopLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ShopCategoryBanner />
      <div className="mt-10 flex gap-4">
    
        <div className="flex-1 px-5">
              <SortProduct />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
