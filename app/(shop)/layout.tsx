import { SortProduct,ShopCategoryBanner } from "@/components/shared";
import {
  StarRatingRadioGroup,
  ColorsRatingRadioGroup,
} from "@/components/shopLayout";
import { Input } from "@/components/ui/input";

const ShopLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ShopCategoryBanner/>
      <div className="flex gap-4 mt-10">
        <div className="basis-1/5 divide-secondary divide-y-2  px-5 shadow-xl">
          <div className="my-8">
            <ColorsRatingRadioGroup />
          </div>
          <div className="mb-8">
            <h2 className="text-primary font-semibold mt-8 mb-2">
              Filter By Product Rating
            </h2>
            <StarRatingRadioGroup />
          </div>
          <div className="mb-8">
            <h2 className="text-primary font-semibold mt-8 mb-2">
              Filter By Price
            </h2>
            <div className="flex gap-4">
              <Input
                type="number"
                min="300"
                max="9000"
                defaultValue={300}
                className="w-full rounded-lg  cursor-pointer"
              />
              <Input
                type="number"
                min="300"
                max="9000"
                defaultValue={8000}
                className="w-full rounded-lg  cursor-pointer"
              />
            </div>
            <Input
              type="range"
              min="300"
              max="8000"
              className="w-full rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-1 px-5">
          <div className="flex justify-between font-semibold my-8">
            <p>
              Showing 1 - <span className="text-destructive">12</span> of <span>12</span> items
            </p>
            <div className="flex gap-2 items-center">
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
