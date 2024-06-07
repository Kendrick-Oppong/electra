import { CameraSchemaProps } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const SonnyDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<CameraSchemaProps>
      url={`sony/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default SonnyDetailsPage;
