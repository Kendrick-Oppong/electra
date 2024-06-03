"use client";
import React from "react";
import { useFetchQueryHook } from "@/hooks";
import FeaturedCard from "./FeaturedCard";
import { Loader } from "lucide-react";
import { Camera, Laptop, Monitor } from "@/types";
import { LoadingSkeleton, ErrorMessage,ButtonLink } from "@/components/shared";
import { usePathname } from 'next/navigation'

interface FeaturedProductsProps {
  url: string;
  queryKey: string;
}

type ProductType = Camera | Laptop | Monitor;

const FeaturedProducts = <T,>({
  url,
  queryKey,
}: FeaturedProductsProps) => {
  const pathname = usePathname();
  const {
    data,
    error,
    isError,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchQueryHook<T>({ url, queryKey });

  if (isLoading) return <LoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

  return (
    <>
      <div className="grid-template justify-center gap-4">
        {data?.pages?.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {(page as any)?.data.map((product: ProductType) => (
              <FeaturedCard key={product._id} product={product} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {pathname !== "/" && (
        <div className="text-center">
          <ButtonLink
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? (
              <>
                Loading <Loader className="ml-2 inline-flex animate-spin" />
              </>
            ) : hasNextPage ? (
              "Load More"
            ) : (
              "You are all caught up"
            )}
          </ButtonLink>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
