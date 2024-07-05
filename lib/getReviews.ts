"use server";
import { cache } from "react";
import Review from "@/models/reviews/reviewsSchema";
import dbConnect from "./dbConnect";

export const getReviews = cache(
  async (productId: string, productType: string, userId = "") => {
    try {
      // Connect to the database
      await dbConnect();
      console.log("Database connected successfully");

      // Fetch reviews for the product
      const reviews = await Review.find({ productId, productType })
        .populate("userId", "username") // Populate user details if needed
        .exec();

      console.log("Reviews fetched:", reviews);

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
      return [];
    }
  },
);
