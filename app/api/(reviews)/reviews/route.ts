import dbConnect from "@/lib/dbConnect";
import Review from "@/models/reviews/reviewsSchema";
import type { NextApiRequest, NextApiResponse } from "next";
import { currentUser, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const url = new URL(req.url as string);
    const productId = url.searchParams.get("productId") as string;
    const productType = url.searchParams.get("productType") as string;

  try {
    await dbConnect();

    const { userId } = auth();
    console.log("Auth User ID:", userId);

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await currentUser();
    console.log("Current User ID:", user?.id);

   

    if (!productId || !productType) {
      return NextResponse.json(
        { message: "Missing productId or productType" },
        { status: 400 },
      );
    }

    // Fetch reviews for the product
    const reviews = await Review.find({ productId, productType })
    

    console.log("Reviews fetched:", reviews);

    // If user is signed in, return all reviews
    const userReviews = user
      ? reviews
      : reviews.filter(
          (review) => review.userId.toString() !== userId.toString(),
        );

    return NextResponse.json({ data: userReviews }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch reviews",
      },
      { status: 500 },
    );
  }
}
