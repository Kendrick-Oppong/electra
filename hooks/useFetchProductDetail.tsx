"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

const fetcher = <T,>(url: string): Promise<T> =>
  axios
    .get(`${baseUrl}/api/${url}`)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error fetching data:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

function useFetchProductDetail<T>({
  url,
  queryKey,
}: {
  url: string;
  queryKey: string;
}) {
  return useQuery<T, Error>({
    queryKey: [queryKey],
    queryFn: () => fetcher<T>(url),
    retry: 3,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
}

export default useFetchProductDetail;
