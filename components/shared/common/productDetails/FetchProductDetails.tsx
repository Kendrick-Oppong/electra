"use client";
import { useFetchProductDetail } from "@/hooks";
import {
  ErrorMessage,
  ProductDetails,
  ProductDetailLoadingSkeleton,
} from "@/components/shared";
import { Camera, Laptop, Monitor } from "@/types";

type ProductType = Camera | Laptop | Monitor;

interface ProductDetailsProps {
  url: string;
  queryKey: string;
}

const FetchProductDetails = <T,>({ url, queryKey }: ProductDetailsProps) => {
  const { data, error, isError, isLoading, refetch } = useFetchProductDetail<{
    data: T;
  }>({ url, queryKey });

  const product = data?.data;

  if (isLoading) return <ProductDetailLoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;
 
  return product ? (
    <ProductDetails product={product as unknown as ProductType} />
  ) : null;
};

export default FetchProductDetails;
