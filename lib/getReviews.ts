import Review from "@/models/reviews/reviewsSchema";
import dbConnect from "./dbConnect";

async function getReviews(productId: string, productType: string, userId = "") {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch reviews for the product
    const reviews = await Review.find({ productId, productType })
      .populate("userId", "username") // Populate user details if needed
      .exec();

    if (userId) {
      // If user is signed in, return all reviews
      return reviews;
    } else {
      // If user is not signed in, filter out the user's own reviews
      return reviews.filter(
        (review) => review.userId.toString() !== userId.toString(),
      );
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
}

export default getReviews;
