import { useState } from "react";
import {
  ProductRating,
  ProductDetailImageGallery,
  ProductDetailSpecifications,
  RelatedProducts,
  ProductDetailActions,
  ProductQuantitySelector,
  ProductReviews,
  AllProductReviews,
  ButtonLink,
} from "@/components/shared";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheck } from "lucide-react";

import { Camera, Laptop, Monitor } from "@/types";

type ProductType = Camera | Laptop | Monitor;

const ProductDetails = ({ product }: { product: ProductType }) => {
  const originalPrice = Math.round(product.price * 1.5);
  const discountedPrice = product.price;

  return (
    <>
      <section className="mx-0 px-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
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
          <div>
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

          <div className="flex flex-wrap sm:gap-3 [&>button:!mt-2]">
            <ProductDetailActions product={product} />
          </div>

          <div className="my-4 flex items-center gap-2">
            <div>
              <p>Share:</p>
            </div>

            <div className="flex gap-4">
              <p className="cursor-pointer rounded-full border border-primary p-2 hover:bg-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  fill="url(#a)"
                  height="20"
                  width="20"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      x2="50%"
                      y1="97.078%"
                      y2="0%"
                      id="a"
                    >
                      <stop offset="0%" stopColor="#0062E0" />
                      <stop offset="100%" stopColor="#19AFFF" />
                    </linearGradient>
                  </defs>
                  <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
                  <path
                    fill="#FFF"
                    d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                  />
                </svg>
              </p>
              <p className="cursor-pointer rounded-full border border-primary p-2 hover:bg-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#002fff"
                    d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                  />
                </svg>
              </p>
              <p className="cursor-pointer rounded-full border border-primary p-2 hover:bg-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 1200 1227"
                >
                  <path
                    fill="#002fff"
                    d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description and Specifications */}
      <section>
        <Tabs defaultValue="description" className="">
          <TabsList className="mb-24 sm:mb-8 flex flex-wrap gap-3 rounded-none bg-transparent">
            <TabsTrigger value="description" className="flex-1 sm:flex-initial">Description</TabsTrigger>
            <TabsTrigger value="specifications" className="flex-1 sm:flex-initial">Specifications</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 sm:flex-initial">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="divide-y-2">
            <div>
              <h2 className="mb-2 font-bold text-primary">Short Description</h2>
              <p>{product.shortDescription}</p>
            </div>

            <div className="mt-5 pt-3">
              <h2 className="mb-2 font-bold text-primary">Full Description</h2>
              <p>{product.fullDescription}</p>
            </div>
          </TabsContent>
          <TabsContent value="specifications">
            <ProductDetailSpecifications product={product} />
          </TabsContent>
          <TabsContent value="reviews">
            <AllProductReviews
              productId={product._id}
              productType={product.brand}
            />

            <ProductReviews
              productId={product._id}
              productType={product.brand}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Related products */}
      {product.brand && (
        <section>
          <h1 className="text-subtitle">You May Also Like</h1>
          <RelatedProducts brand={product?.brand} />
        </section>
      )}
    </>
  );
};

export default ProductDetails;
