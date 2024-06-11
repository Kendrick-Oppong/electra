import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const NewArrival = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="apple"
      queryKey="featured-apple"
      showLoadMore={false}
    />
  );
};

export default NewArrival;

