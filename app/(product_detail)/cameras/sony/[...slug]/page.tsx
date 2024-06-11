import { Camera } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const SonnyDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<Camera>
      url={`sony/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default SonnyDetailsPage;
