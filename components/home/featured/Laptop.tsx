import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";


const FeaturedLaptop = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
        url="hp"
        queryKey="featured-hp"
      />
  );
};

export default FeaturedLaptop;
