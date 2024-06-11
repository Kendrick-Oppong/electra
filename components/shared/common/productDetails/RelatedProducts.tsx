import { FeaturedProducts } from "@/components/shared";
import { CameraSchemaProps,LaptopSchemaProps,MonitorSchemaProps } from "@/types";

type Category = CameraSchemaProps | LaptopSchemaProps | MonitorSchemaProps; 

const RelatedProducts = ({ brand }: { brand: string }) => {
    let url: string;
 
  switch (brand.toLowerCase()) {
    case "nikon":
      url = "canon";
      break;
    case "sony":
      url = "nikon";
      break;
    case "canon":
      url = "sony";
      break;
    case "hp":
      url = "apple";
      break;
    case "dell":
      url = "apple";
      break;
    case "apple":
      url = "hp";
      break;
    case "samsung":
      url = "hp";
      break;
    default:
      url = "canon";  
  }

  return (
    <FeaturedProducts<Category>
      url={url}
      queryKey={`featured-${url}`}
      showLoadMore={false}
    />
  );
};

export default RelatedProducts;
