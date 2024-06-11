import { Laptop } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const HpDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<Laptop>
      url={`hp/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default HpDetailsPage;
