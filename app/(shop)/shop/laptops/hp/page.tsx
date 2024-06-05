import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const HpPage = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="hp"
      queryKey="hp"
    />
  );
};

export default HpPage;
