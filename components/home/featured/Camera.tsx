import {FeaturedProducts} from "@/components/shared";
import { CameraSchemaProps } from "@/types";

const FeaturedCamera = () => {
  return (
    <FeaturedProducts<CameraSchemaProps>
      url="nikon"
      queryKey="featured-nikon"
      showLoadMore={false}
    />
  );
};

export default FeaturedCamera;
