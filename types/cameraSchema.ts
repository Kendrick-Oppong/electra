export interface Camera {
  _id: string;
  title: string;
  rating: number;
  price: number;
  shortDescription: string;
  brand: string;
  videoUrl: string;
  fullDescription: string;
  stockQuantity: number;
  images: {
    primaryImage: string;
    otherImages: string[];
  };
  display: {
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    color: string;
    size: string;
    type: string;
    panelType?: string;
    resolution?: string;
    surfaceType?: string;
    refreshRate?: string;
  };
  specifications: {
    lensMount?: string;
    aperture?: string;
    focalLength?: string;
    sensorType?: string;
    megapixels?: number;
    maxVideoResolution?: string;
    weight?: number;
    suppliedAccessories?: string[];
  };
  reviews: {
    type: string;
    ref: string;
  }[];
}

export interface CameraPage {
  data: Camera[];
  count?: number;
}

export interface CameraSchemaProps {
  pages: CameraPage[];
  pageParams: number[];
}
