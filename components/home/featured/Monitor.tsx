import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const FeaturedMonitor = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="samsung"
      queryKey="featured-samsung"
    />
  );
};

export default FeaturedMonitor;
