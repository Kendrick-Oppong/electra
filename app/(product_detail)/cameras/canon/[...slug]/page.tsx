import { CameraSchemaProps } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const CanonDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<CameraSchemaProps>
      url={`canon/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default CanonDetailsPage;
