import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const CanonPage = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="canon"
      queryKey="canon"
    />
  );
};

export default CanonPage;
