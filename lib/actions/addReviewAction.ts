"use server";
import mongoose, { Document, Model } from "mongoose";
import { cameraSchema } from "@/models/camera/cameraSchema";
import { laptopSchema } from "@/models/laptop/laptopSchema";
import monitorSchema from "@/models/monitor/monitorSchema";
import Review from "@/models/reviews/reviewsSchema";
import User from "@/models/user/userSchema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import dbConnect from "../dbConnect";
import { z } from "zod";
import { ReviewServerDataSchema } from "@/validators/formSchema";
import { actionClient } from "./safe-action";

interface ICollections {
  [key: string]: Model<Document>;
}

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

type DataType = z.infer<typeof ReviewServerDataSchema>;

const internalCreateSafeReview = actionClient
  .schema(ReviewServerDataSchema)
  .action(async function (data: any) {
    const { productId, productType, rating, comment, path, name } =
      data.parsedInput;

    console.log("Received data:", data);

    try {
      // Fetch the user to get their name
      await dbConnect();
      const { userId: clerkId } = auth(); // Get the clerkId from auth
      if (!clerkId) redirect("/sign-in");

      const user = await User.findOne({ clerkId }); // Find the user by clerkId
      if (!user) throw new Error("User not found");

      console.log("User found:", user);

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
      revalidatePath(path);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  });

export async function createSafeReview(data: DataType) {
  return internalCreateSafeReview(data);
}
