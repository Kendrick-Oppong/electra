import { Laptop } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const AppleDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<Laptop>
      url={`apple/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default AppleDetailsPage;
