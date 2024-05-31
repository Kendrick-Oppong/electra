"use client";
import { CameraSchemaProps } from "@/types";
import {
  LoadingSkeleton,
  ErrorMessage,
  FeaturedCard,
} from "@/components/shared";
import { useFetchQueryHook } from "@/hooks";

const NikonPage = () => {
  const { data, error, isError, isLoading, refetch } =
    useFetchQueryHook<CameraSchemaProps>({
      url: "nikon",
      queryKey: "nikon",
    });

  if (isLoading) return <LoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

  return (
    <div className="grid-template gap-4 justify-center ">
      {data &&
        data.data.map((product) => (
          <FeaturedCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default NikonPage;
