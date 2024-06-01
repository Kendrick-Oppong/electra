// "use client";
// import {
//   useQuery,
//   UseQueryResult,
//   keepPreviousData,
// } from "@tanstack/react-query";
// import axios, { AxiosError } from "axios";


// const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

// const fetcher = <T,>(url, {pageParam = 1}): Promise<T> =>
//   axios
//     .get(`${baseUrl}/${url}?_limit=4&_page=${pageParam}`)
//     .then((res) => res.data)
//     .catch((error) => {
//       if (error instanceof AxiosError) {
//         console.error("Error fetching data:", error);
//         throw new Error(error.response?.data.message || error.message);
//       }
//       throw error;
//     });

// function useFetchQueryHook<T>({
//   url,
//   queryKey,
// }: {
//   url: string;
//   queryKey: string;
// }): UseQueryResult<T, Error> {
//   return useQuery<T, Error>({
//     queryKey: [queryKey],
//     queryFn: () => fetcher<T>(url),
//     retry: 3,
//     staleTime: 0,
//     placeholderData: keepPreviousData,
//     refetchOnWindowFocus: true,
//   });
// }

// export default useFetchQueryHook;




"use client";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  keepPreviousData,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";


const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

const fetcher = <T,>(url:string, pageParam: number = 1): Promise<T> =>
  axios
    .get(`${baseUrl}/${url}?page=${pageParam}`)
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
}){
  return useInfiniteQuery<T, Error>({
    queryKey: [queryKey],
    queryFn: ({ pageParam = 1 }) => fetcher<T>(url,(pageParam as number)),
    retry: 3,
    staleTime: 0,
     initialPageParam: 0,
    // placeholderData: keepPreviousData,
       getNextPageParam: (lastPage, allPages) => {
      const lastPageData = lastPage as any; 
      return lastPageData.data.length === 4 ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: true,
  });
}

export default useFetchQueryHook;
