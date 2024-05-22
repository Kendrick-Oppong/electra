"use client";
import GetFeaturedProducts from "@/lib/getFeaturedProducts";
import { LaptopSchemaProps } from "@/types/laptopSchema";
import FeaturedCard from "./FeaturedCard";
import LoadingSkeleton from "../shared/LoadingSkeleton";

const FeaturedLaptop = () => {
  const { data, error, isError, isLoading } =
    GetFeaturedProducts<LaptopSchemaProps>({
      url: "hp",
      queryKey: "featured-hp",
    });
  const slicedfeaturedHp = data?.data.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  if (isError) return <p>Error</p>;
  return (
    <div className="grid-template gap-4 justify-center ">
      {slicedfeaturedHp &&
        slicedfeaturedHp.map((product) => (
          <FeaturedCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default FeaturedLaptop;
