interface Dimensions {
  length: number;
  width: number;
  height: number;
}

export interface Display {
  color: string;
  dimensions: Dimensions;
  panelType: string;
  resolution?: string;
  surfaceType?: string;
  refreshRate?: string;
}

export interface ProcessorDetails {
  processor: string;
  cpu: string;
  l3Cache: string;
  graphicsType: string;
  gpu: string;
  memoryType: string;
  totalInstalledMemory: string;
  memoryConfiguration: string;
  memorySlotType: string;
  memorySlots: number;
  eccMemory?: boolean;
}

export interface IoDetails {
  audioIO: string;
  networkIO?: string;
  builtInSpeakers?: boolean;
  builtInMicrophones?: boolean;
  mediaMemoryCardSlot: string;
}

export interface Communications {
  wifi: string;
  bluetooth: string;
  cellularSupport?: boolean;
  gps?: boolean;
  webcam: string;
}

interface Battery {
  capacity: string;
}

interface KeyboardMouse {
  keyboard: string;
  pointingDevice: string;
}

export interface GeneralDetails {
  security: string[];
  powerSupply: string;
  dimensions: string;
  weight: string;
}

export interface Laptop {
  _id: string;
  title: string;
  rating: number;
  price: number;
  shortDescription: string;
  brand: string;
  videoUrl?: string;
  fullDescription: string;
  stockQuantity: number;
  images: {
    primaryImage: string;
    otherImages?: string[];
  };
  display: Display;
  operatingSystem: string;
  processor: string;
  gpu: string;
  totalInstalledMemory: string;
  displaySize: string;
  nativeResolution: string;
  touchscreen?: boolean;
  totalInstalledCapacity: string;
  inputsOutputs: string[];
  processorDetails: ProcessorDetails;
  storageDriveType: string;
  storageExpansion?: boolean;
  ioDetails: IoDetails;
  communications: Communications;
  battery: Battery;
  keyboardMouse: KeyboardMouse;
  generalDetails: GeneralDetails;
  suppliedAccessories?: string[];
  reviews?: string[];
}


export interface LaptopPage {
  data: Laptop[];
  count: number;
}
export interface LaptopSchemaProps {
  pages: LaptopPage[];
  pageParams: number[];
}
