"use client";
import { useSearchParams } from "next/navigation";
import { useFetchProductDetail } from "@/hooks";
import {
  ErrorMessage,
  FeaturedCard,
  ProductDetailLoadingSkeleton,
} from "@/components/shared";
import { AlertTriangle } from "lucide-react";
import {
  CameraPage,
  Camera,
  LaptopPage,
  Laptop,
  MonitorPage,
  Monitor,
} from "@/types";

const GlobalSearchPage = () => {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");
  const query = searchParams.get("query");
  const selectedText = searchParams.get("selectedText");

  const queryKey = `search-${brand}-${query}-${selectedText}`;
  const url = `/search?query=${query ?? ""}&brand=${brand ?? ""}&selectedText=${selectedText ?? ""}`;

  const { data, error, isError, isLoading, refetch } = useFetchProductDetail<
    CameraPage | LaptopPage | MonitorPage
  >({
    url,
    queryKey,
  });

  if (isLoading) return <ProductDetailLoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

  return (
    <>
      {data &&
        (data.data.length > 0 ? (
          <section className="grid-template-search justify-center gap-4">
            {data.data.map((searchProduct: Camera | Laptop | Monitor) => (
              <FeaturedCard key={searchProduct._id} product={searchProduct} />
            ))}
          </section>
        ) : (
          <h1 className="flex items-center justify-center gap-2 font-bold">
            <AlertTriangle className="text-destructive" /> No product found for{" "}
            <span>&quot;{query}&quot;</span>
          </h1>
        ))}
    </>
  );
};

export default GlobalSearchPage;
