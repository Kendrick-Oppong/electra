"use client";
import { useFetchProductDetail } from "@/hooks";
import {
  LoadingSkeleton,
  ErrorMessage,
  ProductDetails,
  ProductDetailLoadingSkeleton,
} from "@/components/shared";

interface ProductDetailsProps {
  url: string;
  queryKey: string;
}

const FetchProductDetails = <T,>({ url, queryKey }: ProductDetailsProps) => {
  const { data, error, isError, isLoading, refetch } = useFetchProductDetail<T>(
    { url, queryKey },
  );

  if (isLoading) return <ProductDetailLoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;
  console.log(data);
  return <ProductDetails key={data?.data._id} product={data?.data} />;
};

export default FetchProductDetails;
