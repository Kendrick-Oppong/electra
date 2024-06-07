import { CameraSchemaProps } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const NikonDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<CameraSchemaProps>
      url={`nikon/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default NikonDetailsPage;