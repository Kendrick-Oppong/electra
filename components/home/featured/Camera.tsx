"use client";
import { CameraSchemaProps } from "@/types";
import FeaturedCard from "../../shared/FeaturedCard";
import { LoadingSkeleton, ErrorMessage } from "../../shared";
import { useFetchQueryHook } from "@/hooks";

const FeaturedCamera = () => {
  const { data, error, isError, isLoading, refetch } =
    useFetchQueryHook<CameraSchemaProps>({
      url: "nikon",
      queryKey: "featured-nikon",
    });
  const slicedfeaturedCamera = data?.data.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

  return (
    <div className="grid-template gap-4 justify-center ">
      {slicedfeaturedCamera &&
        slicedfeaturedCamera.map((product) => (
          <FeaturedCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default FeaturedCamera;