import { LaptopSchemaProps } from "@/types";
import { FeaturedProducts } from "@/components/shared";

const AllCamerasPage = () => {
  return (
    <div>
      <div>
      <h1 className="text-subtitle text-primary">Canon</h1>
        <FeaturedProducts<LaptopSchemaProps> url="canon" queryKey="canon" />
      </div>
      <div className="mt-14">
      <h1 className="text-subtitle text-primary">Nikon</h1>
        <FeaturedProducts<LaptopSchemaProps> url="nikon" queryKey="nikon" />
      </div>
      <div className="mt-14">
      <h1 className="text-subtitle text-primary">Sony</h1>
        <FeaturedProducts<LaptopSchemaProps> url="sony" queryKey="sony" />
      </div>
    </div>
  );
};

export default AllCamerasPage;
