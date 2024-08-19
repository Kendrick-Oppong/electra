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
  SocialShareLinks
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
      <section className="mx-0 grid grid-cols-1 gap-5 px-4 lg:grid-cols-2">
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

          <div className="[&>button:!mt-2] flex flex-wrap sm:gap-3">
            <ProductDetailActions product={product} />
          </div>

          <div className="my-8 flex items-center gap-2 sm:my-4">
            <div>
              <p>Share:</p>
            </div>
            <SocialShareLinks productTitle={product.title}/>

        
          </div>
        </div>
      </section>

      {/* Description and Specifications */}
      <section>
        <Tabs defaultValue="description" className="">
          <TabsList className="mb-24 flex flex-wrap gap-3 rounded-none bg-transparent sm:mb-8">
            <TabsTrigger value="description" className="flex-1 sm:flex-initial">
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="flex-1 sm:flex-initial"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 sm:flex-initial">
              Reviews
            </TabsTrigger>
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
