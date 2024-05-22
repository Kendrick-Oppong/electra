import { Schema } from "mongoose";

export const laptopSchema = new Schema({
  // Basic Information
  title: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  price: { type: Number, required: true },
  shortDescription: { type: String, required: true },
  brand: { type: String, required: true },
  videoUrl: { type: String, },
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
    color: { type: String, required: true },
    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
    panelType: { type: String, required: true },
    resolution: { type: String },
    surfaceType: { type: String },
    refreshRate: { type: String },
  },

  // Key Specs
  operatingSystem: { type: String, required: true },
  processor: { type: String, required: true },
  gpu: { type: String, required: true },
  totalInstalledMemory: { type: String, required: true },
  displaySize: { type: String, required: true },
  nativeResolution: { type: String, required: true },
  touchscreen: { type: Boolean, default: false },
  totalInstalledCapacity: { type: String, required: true },

  // Inputs/Outputs
  inputsOutputs: { type: [String], required: true },

  // Performance
  processorDetails: {
    processor: { type: String, required: true },
    cpu: { type: String, required: true },
    l3Cache: { type: String, required: true },
    graphicsType: { type: String, required: true },
    gpu: { type: String, required: true },
    memoryType: { type: String, required: true },
    totalInstalledMemory: { type: String, required: true },
    memoryConfiguration: { type: String, required: true },
    memorySlotType: { type: String, required: true },
    memorySlots: { type: Number, required: true },
    eccMemory: { type: Boolean, default: false },
  },

  // Storage and Expansion
  storageDriveType: { type: String, required: true },
  storageExpansion: { type: Boolean, default: false },

  // Input/Output
  ioDetails: {
    audioIO: { type: String, required: true },
    networkIO: { type: String, default: "No" },
    builtInSpeakers: { type: Boolean, default: true },
    builtInMicrophones: { type: Boolean, default: true },
    mediaMemoryCardSlot: { type: String, required: true },
  },

  // Communications
  communications: {
    wifi: { type: String, required: true },
    bluetooth: { type: String, required: true },
    cellularSupport: { type: Boolean, default: false },
    gps: { type: Boolean, default: false },
    webcam: { type: String, required: true },
  },

  // Battery
  battery: {
    capacity: { type: String, required: true },
  },

  // Keyboard & Mouse
  keyboardMouse: {
    keyboard: { type: String, required: true },
    pointingDevice: { type: String, required: true },
  },

  // General
  generalDetails: {
    security: { type: [String], required: true },
    powerSupply: { type: String, required: true },
    dimensions: { type: String, required: true },
    weight: { type: String, required: true },
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
