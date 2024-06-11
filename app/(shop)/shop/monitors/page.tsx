import { LaptopSchemaProps } from "@/types";
import { FeaturedProducts } from "@/components/shared";

const AllMonitorsPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-subtitle text-primary">
          Samsung
        </h1>
        <FeaturedProducts<LaptopSchemaProps> url="samsung" queryKey="samsung" />
      </div>
    </div>
  );
};

export default AllMonitorsPage;
