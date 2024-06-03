import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const NikonPage = () => {
 
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="nikon"
      queryKey="nikon"
    />
  );
};

export default NikonPage;
