import { LaptopSchemaProps } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const DellDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<LaptopSchemaProps>
      url={`dell/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default DellDetailsPage;
