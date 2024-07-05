
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ProductProps {
  productId: string;
  productType: string;
}

export default async function AllProductReviews({
  productId,
  productType,
}: Readonly<ProductProps>) {
  const { isLoaded, isSignedIn,user } = useUser();

  // In case the user signs out while on the page or is not logged in
  if (!isLoaded || !isSignedIn) {
    redirect("/sign-in");
  }

  console.log("Fetching reviews for product:", productId, productType);



  return <div>Reviews</div>;
}
