"use client";
import GetFeaturedProducts from "@/lib/getFeaturedProducts";
import { MonitorSchemaProps } from "@/types/monitorSchema";
import FeaturedCard from "./FeaturedCard";
import LoadingSkeleton from "../shared/LoadingSkeleton";

const FeaturedMonitor = () => {
  const { data, error, isError, isLoading } =
    GetFeaturedProducts<MonitorSchemaProps>({
      url: "samsung",
      queryKey: "featured-samsung",
    });
  const slicedfeaturedMonitor = data?.data.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  if (isError) return <p>Error</p>;

  return (
    <div className="grid-template gap-4 justify-center ">
      {slicedfeaturedMonitor &&
        slicedfeaturedMonitor.map((product) => (
          <FeaturedCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default FeaturedMonitor;
