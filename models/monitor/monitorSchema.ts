import { Schema } from "mongoose";

export const monitorSchema = new Schema({
  // Basic Information
  title: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  price: { type: Number, required: true },
  shortDescription: { type: String, required: true },
  brand: { type: String, required: true },
  videoUrl: { type: String, required: true },
  fullDescription: { type: String, required: true },

  // Stock Information
  stockQuantity: { type: Number, required: true, min: 0 },

  // Images
  images: {
    primaryImage: { type: String, required: true },
    otherImages: { type: [String], default: [] },
  },

  // Display Information
  display: {
    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
    panelType: { type: String, required: true },
    resolution: { type: String, required: true },
    refreshRate: { type: String, required: true },
    hdrSupport: { type: Boolean, default: false },
    color: { type: String, required: true },
  },

  // Key Specs
  displaySize: { type: String, required: true },
  smartTv: { type: Boolean, default: false },
  operatingSystem: { type: String },
  processor: { type: String },
  gpu: { type: String },
  ram: { type: String },
  storageCapacity: { type: String },

  // Inputs/Outputs
  inputsOutputs: {
    hdmiPorts: { type: Number, required: true },
    usbPorts: { type: Number, required: true },
    ethernetPort: { type: Boolean, default: false },
    otherPorts: { type: [String], default: [] },
  },

  // Performance
  performance: {
    refreshRate: { type: String, required: true },
    responseTime: { type: String },
    contrastRatio: { type: String },
  },

  // Audio
  audio: {
    audioOutput: { type: String, required: true },
    builtInSpeakers: { type: Boolean, default: true },
    speakerType: { type: String },
  },

  // Communications
  communications: {
    wifi: { type: String, required: true },
    bluetooth: { type: String, required: true },
    ethernet: { type: Boolean, default: false },
    rfInput: { type: Boolean, default: false },
  },

  // Power
  power: {
    powerSupply: { type: String, required: true },
    powerConsumption: { type: String },
  },

  // General
  generalDetails: {
    dimensions: { type: String, required: true },
    weight: { type: String, required: true },
    color: { type: String },
    mounting: { type: String },
  },

  // Supplied Accessories
  suppliedAccessories: { type: [String], default: [] },

  //Reviews
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

export default monitorSchema;
