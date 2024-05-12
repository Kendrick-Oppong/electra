import { Schema, models, model } from "mongoose";

const cameraSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    brand: { type: String, required: true },
    fullDescription: {
      type: String,
      required: true,
    },

    stockQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
    primaryImage: {
      type: String,
      required: true,
    },
    otherImages: {
      type: [String],
      default: [],
    },
    dimensions: {
      type: {
        length: { type: Number, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
      },
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    display: {
      size: { type: String, required: true },
      type: { type: String, required: true },
      panelType: { type: String },
      resolution: { type: String },
      surfaceType: { type: String },
      refreshRate: { type: String },
    },
    specifications: {
      lensMount: { type: String },
      aperture: { type: String },
      focalLength: { type: String },
      sensorType: { type: String },
      megapixels: { type: Number },
      maxVideoResolution: { type: String },
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    frequentlyBoughtTogether: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Camera",
      },
    ],
  },
  { timestamps: true }
);

const Camera = models.Camera || model("Camera", cameraSchema);

export default Camera;
