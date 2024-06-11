import { LaptopSchemaProps } from "@/types";
import { FeaturedProducts } from "@/components/shared";

const AllLaptopsPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-subtitle text-primary">Apple</h1>
        <FeaturedProducts<LaptopSchemaProps> url="apple" queryKey="apple" />
      </div>
      <div className="mt-14">
        <h1 className="text-subtitle text-primary">Dell</h1>
        <FeaturedProducts<LaptopSchemaProps> url="dell" queryKey="dell" />
      </div>
      <div className="mt-14">
        <h1 className="text-subtitle text-primary">Hp</h1>
        <FeaturedProducts<LaptopSchemaProps> url="hp" queryKey="hp" />
      </div>
    </div>
  );
};

export default AllLaptopsPage;
