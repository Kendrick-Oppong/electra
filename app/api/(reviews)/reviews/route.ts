import dbConnect from "@/lib/dbConnect";
import Review from "@/models/reviews/reviewsSchema";
import { currentUser, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import mongoose, { Document, Model } from "mongoose";
import { cameraSchema } from "@/models/camera/cameraSchema";
import { laptopSchema } from "@/models/laptop/laptopSchema";
import monitorSchema from "@/models/monitor/monitorSchema";
import User from "@/models/user/userSchema";
import { z } from "zod";
import { ReviewServerDataSchema } from "@/validators/formSchema";

export async function GET(req: Request, res: Response) {
  const url = new URL(req.url);
  const productId = url.searchParams.get("productId") as string;
  const productType = url.searchParams.get("productType") as string;

  try {
    await dbConnect();
    const { userId } = auth();
   

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized - Please sign in" },
        { status: 401 },
      );
    }

    const user = await currentUser();
   

    if (!productId || !productType) {
      return NextResponse.json(
        { message: "Missing productId or productType" },
        { status: 400 },
      );
    }

    // Fetch reviews for the product
    const reviews = await Review.find({ productId, productType }).select(
      "username rating comment createdAt userId",
    );

   

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

interface ICollections {
  [key: string]: Model<Document>;
}

export async function POST(req: Request, res: Response) {
  // Ensure models are registered only once
  const getModel = (modelName: string, schema: any) => {
    return mongoose.models[modelName] || mongoose.model(modelName, schema);
  };

  // Define collections
  const collections: ICollections = {
    Canon: getModel("Canon", cameraSchema),
    Sony: getModel("Sony", cameraSchema),
    Nikon: getModel("Nikon", cameraSchema),
    Apple: getModel("Apple", laptopSchema),
    Dell: getModel("Dell", laptopSchema),
    Hp: getModel("Hp", laptopSchema),
    Samsung: getModel("Samsung", monitorSchema),
  };

  try {
    // get request body
    const data = await req.json();
    const result = ReviewServerDataSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Invalid data",
          error: result.error.errors,
        },
        { status: 400 },
      );
    }
    const { productId, productType, name, rating, comment } = result.data;

    await dbConnect();
    // Fetch the user to get their name
    const { userId: clerkId } = auth(); // Get the clerkId from auth
    if (!clerkId) return NextResponse.redirect("/sign-in");

    const user = await User.findOne({ clerkId }); // Find the user by clerkId
    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 400 },
      );
    }

    console.log("User found:", user);

    // Check if the user has already reviewed the product
    const existingReview = await Review.findOne({
      userId: user._id,
      productId,
      productType,
    });

    if (existingReview) {
      return NextResponse.json(
        {
          message: "You already reviewed this product",
          hasReviewed: true,
        },
        { status: 400 },
      );
    }

    // Create a new review
    const review = new Review({
      userId: user._id,
      productId,
      productType,
      username: name || user.username,
      rating,
      comment,
    });

    console.log("Review to save:", review);

    // Save the review
    await review.save();

    // Update the respective product collection
    const Collection = collections[productType];
    if (!Collection) throw new Error("Invalid product type");

    await Collection.findByIdAndUpdate(productId, {
      $push: { reviews: review._id },
    });

    // Update the user to reference the new review (optional)
    await User.findByIdAndUpdate(user._id, {
      $push: { reviews: review._id },
    });

    return NextResponse.json(
      { message: "Review Successfully Created" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json(
      {
        message: "Failed to add review",
      },
      { status: 500 },
    );
  }
}
