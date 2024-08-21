
import {
  ProductRating,
  ProductDetailImageGallery,
  ProductDetailActions,
  ProductQuantitySelector,
} from "@/components/shared";
import { ScrollArea } from "@/components/ui/scroll-area";
import {CircleCheck,} from "lucide-react";

import { Camera, Laptop, Monitor } from "@/types";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type ProductType = Camera | Laptop | Monitor;

interface QuickViewProps {
  product: ProductType;
  children: React.ReactNode;
}

const ProductDetailQuickView = ({ product, children }: QuickViewProps) => {
  const originalPrice = Math.round(product.price * 1.5);
  const discountedPrice = product.price;

  return (
    <section className="m-0">
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side="bottom" className="!px-0 md:px-auto py-14 z-[10000]">
          <ScrollArea
            className="h-[30rem] lg:h-[35rem] !px-[0.5rem] sm:px-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="gap-5 lg:grid lg:grid-cols-2">
              <div>
                <ProductDetailImageGallery product={product} />
              </div>
              <div className="mt-8 lg:mt-0">
                <h1 className="mb-4 text-3xl font-bold text-primary">
                  {product.title}
                </h1>
                <div className="mb-5 flex items-center gap-3">
                  <ProductRating rating={product.rating} className="!mx-0" />
                  <p>{product.rating}</p>
                </div>

                <p className="my-3 text-2xl font-bold text-destructive">
                  ${discountedPrice}{" "}
                  <span className="ml-2 text-lg font-normal text-secondary line-through dark:text-primary dark:opacity-50">
                    {" "}
                    ${originalPrice}
                  </span>
                </p>
                <div className="text-justify">
                  <p>{product.shortDescription}</p>
                </div>

                <div className="my-4 flex gap-5">
                  <p>
                    <span className="mr-1 font-semibold">Brand:</span>
                    {product.brand}
                  </p>
                  <p>
                    <span className="mr-1 font-semibold">Color:</span>
                    {product?.display?.color}
                  </p>
                </div>

                <div className="flex items-center gap-2 border-b border-secondary pb-4 font-semibold text-green-600">
                  <CircleCheck />
                  <p>In stock ({product.stockQuantity} remaining) </p>
                </div>

                <ProductQuantitySelector productId={product._id} />
                <div className="flex gap-3">
                  <ProductDetailActions product={product} />
                </div>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default ProductDetailQuickView;