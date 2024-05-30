"use client";
import { useFetchQueryHook } from "@/hooks";
import { MonitorSchemaProps } from "@/types";
import FeaturedCard from "../../shared/FeaturedCard";
import { LoadingSkeleton, ErrorMessage } from "../../shared";

const FeaturedMonitor = () => {
  const { data, error, isError, isLoading, refetch } =
    useFetchQueryHook<MonitorSchemaProps>({
      url: "samsung",
      queryKey: "featured-samsung",
    });
  const slicedfeaturedMonitor = data?.data.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

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
