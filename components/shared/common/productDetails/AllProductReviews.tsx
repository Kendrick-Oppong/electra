import { useFetchProductDetail } from "@/hooks";
import { formatDate } from "@/lib/getDateFormate";
import {
  ProductReviewLoadingSkeleton,
  ErrorMessage,
  ProductRating,
} from "@/components/shared";
import { ReviewsResponse } from "@/types";
import { AlertTriangle } from "lucide-react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductProps {
  productId: string;
  productType: string;
}

export default async function AllProductReviews({
  productId,
  productType,
}: Readonly<ProductProps>) {
  const {
    data: reviews,
    error,
    isError,
    isLoading,
    refetch,
  } = useFetchProductDetail<ReviewsResponse>({
    url: `reviews?productId=${productId}&productType=${productType}`,
    queryKey: `${productType}-${productId}`,
  });

  if (isLoading) return <ProductReviewLoadingSkeleton />;

  if (isError)
    return <ErrorMessage message={error!.message} refetch={refetch} />;

  return (
    <section>
      {reviews &&
        (reviews?.data?.length > 0 ? (
          reviews.data.map((review) => (
            <Table key={review.userId} className="mb-4 border-gray">
              <TableHeader>
                <TableRow>
                  <TableHead className="flex items-center justify-between bg-accent font-semibold text-primary">
                    <h2>{review.username || ""}</h2>
                    <h2>{ formatDate(review.createdAt) || ""}</h2>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-lg">
                <p className="my-3 pl-3">{review.comment || ""}</p>
                <div className="pl-3 mb-3">
                  <ProductRating
                    rating={review.rating || 3}
                    className="!ml-0"
                  />
                </div>
              </TableBody>
            </Table>
          ))
        ) : (
          <h1 className="flex items-center justify-center gap-2 font-bold">
            <AlertTriangle className="text-destructive" /> No reviews found
          </h1>
        ))}
    </section>
  );
}
