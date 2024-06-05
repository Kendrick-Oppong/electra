import { ShopCategoryBanner } from "@/components/shared";
import {
  StarRatingRadioGroup,
  ColorsRatingRadioGroup,
  SortProduct,
  FilterByPrice,
} from "@/components/shopLayout";

const ShopLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ShopCategoryBanner />
      <div className="mt-10 flex gap-4">
        {/* <div className="basis-1/5 divide-y-2 divide-secondary rounded-br-lg rounded-tr-lg border border-primary px-5 shadow-xl">
          {/* <div className="my-8">
            <ColorsRatingRadioGroup />
          </div> */}
          {/* <div className="mb-8">
            <h2 className="mb-2 mt-8 font-semibold text-primary">
              Filter By Product Rating
            </h2>
            <StarRatingRadioGroup />
          </div> */}
          {/* <div className="mb-8">
            <h2 className="mb-2 mt-8 font-semibold text-primary">
              Filter By Price
            </h2>
            <FilterByPrice />
          </div> */}
        {/* </div> */} 
        <div className="flex-1 px-5">
          <div className="my-8 flex justify-between font-semibold">
            <p>
              Showing 1 - <span className="text-destructive">12</span> of{" "}
              <span>12</span> items
            </p>
            <div className="flex items-center gap-2">
              <p>Sort By:</p>
              <SortProduct />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
