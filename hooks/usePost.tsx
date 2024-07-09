import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ReviewServerDataSchema } from "./../validators/formSchema";
import { z } from "zod";

type DataType = z.infer<typeof ReviewServerDataSchema>;

const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;
const fetcher = (url: string, data: DataType) =>
  axios
    .post(`${baseUrl}/api/${url}`, data)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error posting:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

const usePost = ({ url, queryKey }: { url: string; queryKey: string }) => {
  const queryClient = useQueryClient();
  const { data, error, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: (field?: DataType) => fetcher(url, field!),
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: [`${queryKey}`],
      });
    },
    onError: (error) => {
      console.error(error);
      toast.error(error?.message);
      throw new Error(error?.message);
    },
  });

  return { data, error, isError, isPending, isSuccess, mutate };
};

export default usePost;
