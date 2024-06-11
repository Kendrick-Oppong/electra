import { Monitor } from "@/types";
import { FetchProductDetails } from "@/components/shared";

interface ParamsProps {
  params:{
    slug:string[]
  }
}

const SamsungDetailsPage = ({params}:ParamsProps) => {
  const [productName,id] = params.slug
  return (
   <FetchProductDetails<Monitor> url={`samsung/${id}`} queryKey={`${productName}-${id}`} />
  );
};

export default SamsungDetailsPage;
