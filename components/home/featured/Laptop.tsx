"use client";
import { useFetchQueryHook } from "@/hooks";
import { LaptopSchemaProps } from "@/types";
import FeaturedCard from "../../shared/FeaturedCard";
import { LoadingSkeleton, ErrorMessage } from "../../shared";

const FeaturedLaptop = () => {
  const { data, error, isError, isLoading, refetch } =
    useFetchQueryHook<LaptopSchemaProps>({
      url: "hp",
      queryKey: "featured-hp",
    });
  const slicedfeaturedHp = data?.data.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

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
