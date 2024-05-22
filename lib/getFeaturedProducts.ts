"use client";

import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

const fetcher = (url: string) =>
  axios
    .get(`${baseUrl}/${url}`)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error fetching data:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

function GetFeaturedProducts<T>({
  url,
  queryKey,
}: {
  url: string;
  queryKey: string;
}) {
  const { data, isLoading, isError, error, refetch } = useQuery<T>({
    queryKey: [queryKey],
    queryFn: () => fetcher(url),
    retry: 3,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return { data, isLoading, isError, error, refetch };
}

export default GetFeaturedProducts;
