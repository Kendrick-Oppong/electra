"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

const fetcher = <T,>(
  url: string,
  pageParam: number = 1,
  sortQuery: string | null,
): Promise<T> =>
  axios
    .get(`${baseUrl}/api/${url}?page=${pageParam}&sort=${sortQuery}`)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error fetching data:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

function useFetchQueryHook<T>({
  url,
  queryKey,
}: {
  url: string;
  queryKey: string;
}) {
  const searchParams = useSearchParams();

  const sortQuery = searchParams.get("sort");
  return useInfiniteQuery<T, Error>({
    queryKey: [queryKey, `${queryKey}-${sortQuery}`],
    queryFn: ({ pageParam = 1 }) =>
      fetcher<T>(url, pageParam as number, sortQuery),
    retry: 3,
    staleTime: 0,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPageData = lastPage as any;
      const totalFetchedItems = allPages.reduce(
        (total, page: any) => total + page.data.length,
        0,
      );
      return totalFetchedItems < lastPageData.totalCount
        ? allPages.length + 1
        : undefined;
    },
    refetchOnWindowFocus: true,
  });
}

export default useFetchQueryHook;
