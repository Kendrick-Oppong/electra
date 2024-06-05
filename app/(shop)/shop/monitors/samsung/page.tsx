import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const NikonPage = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="samsung"
      queryKey="samsung"
    />
  );
};

export default NikonPage;
