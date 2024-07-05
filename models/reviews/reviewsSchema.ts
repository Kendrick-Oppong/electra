import { Schema, model, models } from "mongoose";

const reviewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  productType: {
    type: String,
    required: true,
    enum: ["Canon", "Sony", "Nikon", "Apple", "Dell", "Hp", "Samsung"],
  },
  username: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = models?.Review || model("Review", reviewSchema);
export default Review;
