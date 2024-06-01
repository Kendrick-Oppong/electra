import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const DellPage = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="dell"
      queryKey="dell"
    />
  );
};

export default DellPage;
