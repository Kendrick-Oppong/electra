import { LaptopSchemaProps } from "@/types";
import {FeaturedProducts} from "@/components/shared";

const ApplePage = () => {
  return (
    <FeaturedProducts<LaptopSchemaProps>
      url="apple"
      queryKey="apple"
    />
  );
};

export default ApplePage;
