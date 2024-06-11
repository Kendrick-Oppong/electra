import { Camera } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params: {
    slug: string[];
  };
}

const NikonDetailsPage = ({ params }: ParamsProps) => {
  const [productName, id] = params.slug;
  return (
    <FetchProductDetails<Camera>
      url={`nikon/${id}`}
      queryKey={`${productName}-${id}`}
    />
  );
};

export default NikonDetailsPage;
