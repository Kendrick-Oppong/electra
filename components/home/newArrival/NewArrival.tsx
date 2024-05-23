"use client";
import GetFeaturedProducts from "@/lib/getFeaturedProducts";
import { LaptopSchemaProps } from "@/types";
import { FeaturedCard } from "@/components/home/featured";
import { LoadingSkeleton, ErrorMessage } from "@/components/shared";

const NewArrival = () => {
  const { data, error, isError, isLoading, refetch } =
    GetFeaturedProducts<LaptopSchemaProps>({
      url: "apple",
      queryKey: "new_arrival-apple",
    });
  const apple = data?.data.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

  return (
    <div className="grid-template gap-4 justify-center ">
      {apple &&
        apple.map((product) => (
          <FeaturedCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default NewArrival;
