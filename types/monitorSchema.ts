interface Dimensions {
  length: number;
  width: number;
  height: number;
}

interface Images {
  primaryImage: string;
  otherImages?: string[];
}

interface Display {
  dimensions: Dimensions;
  panelType: string;
  resolution: string;
  refreshRate: string;
  hdrSupport?: boolean;
  color: string;
}

interface InputsOutputs {
  hdmiPorts: number;
  usbPorts: number;
  ethernetPort?: boolean;
  otherPorts?: string[];
}

interface Performance {
  refreshRate: string;
  responseTime?: string;
  contrastRatio?: string;
}

interface Audio {
  audioOutput: string;
  builtInSpeakers?: boolean;
  speakerType?: string;
}

interface Communications {
  wifi: string;
  bluetooth: string;
  ethernet?: boolean;
  rfInput?: boolean;
}

interface Power {
  powerSupply: string;
  powerConsumption?: string;
}

interface GeneralDetails {
  dimensions: string;
  weight: string;
  color?: string;
  mounting?: string;
}

export interface Monitor {
  _id: string;
  title: string;
  rating: number;
  price: number;
  shortDescription: string;
  brand: string;
  videoUrl: string;
  fullDescription: string;
  stockQuantity: number;
  images: Images;
  display: Display;
  displaySize: string;
  smartTv?: boolean;
  operatingSystem?: string;
  processor?: string;
  gpu?: string;
  ram?: string;
  storageCapacity?: string;
  inputsOutputs: InputsOutputs;
  performance: Performance;
  audio: Audio;
  communications: Communications;
  power: Power;
  generalDetails: GeneralDetails;
  suppliedAccessories?: string[];
  reviews?: string[];
}

export interface MonitorSchemaProps {
  data: Monitor[];
}
