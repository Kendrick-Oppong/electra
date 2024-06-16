import {
  ProductRating,
  ButtonLink,
  ProductDetailImageGallery,
} from "@/components/shared";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  CircleCheck,
  ShoppingCart,
  CreditCard,
  Heart,
  Plus,
  Minus,
} from "lucide-react";
import { Input } from "@/components/ui/input";

import { Camera, Laptop, Monitor } from "@/types";

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
      <Drawer direction="bottom">
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent className="p-5">
        <ScrollArea className="h-[30rem]  lg:h-[35rem]">

          <div className="lg:grid gap-5 lg:grid-cols-2">
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

              <div className="relative my-4 flex items-center gap-3">
                <p className="font-semibold">Quantity:</p>
                <div className="relative w-48">
                  <Minus className="absolute left-1 top-2.5" />
                  <Input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="h-11 border-primary text-center"
                  />
                  <Plus className="absolute right-1 top-2.5" />
                </div>
              </div>
              <div className="flex gap-3">
                <ButtonLink>
                  Add to cart <ShoppingCart className="ml-2 inline-flex" />
                </ButtonLink>
                <ButtonLink>
                  Buy now <CreditCard className="ml-2 inline-flex" />
                </ButtonLink>
              </div>
              <div className="my-6 flex cursor-pointer items-center gap-2 hover:border-destructive hover:text-destructive">
                <Heart className="" /> <p>Add To Wishlist</p>
              </div>
            </div>
          </div>

          <DrawerFooter>
            <ButtonLink>Submit</ButtonLink>
            <DrawerClose>
              <ButtonLink>Cancel</ButtonLink>
            </DrawerClose>
          </DrawerFooter>
        </ScrollArea>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default ProductDetailQuickView;
