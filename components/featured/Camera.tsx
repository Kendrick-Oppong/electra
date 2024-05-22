"use client";
import GetFeaturedProducts from "@/lib/getFeaturedProducts";
import { CameraSchemaProps } from "@/types/cameraSchema";
import FeaturedCard from "./FeaturedCard";
import LoadingSkeleton from "../shared/LoadingSkeleton";

const FeaturedCamera = () => {
  const { data, error, isError, isLoading } =
    GetFeaturedProducts<CameraSchemaProps>({
      url: "nikon",
      queryKey: "featured-nikon",
    });
  const slicedfeaturedCamera = data?.data.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  if (isError) return <p>{error.message}</p>;

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
