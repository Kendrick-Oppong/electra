import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const FeaturedMonitor = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="samsung"
      queryKey="featured-samsung"
      showLoadMore={false}
    />
  );
};

export default FeaturedMonitor;
