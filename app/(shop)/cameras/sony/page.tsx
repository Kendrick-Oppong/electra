import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const SonyPage = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="sony"
      queryKey="sony"
    />
  );
};

export default SonyPage;
