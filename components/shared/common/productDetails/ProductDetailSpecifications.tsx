import {
  CameraDetailSpecifications,
  MonitorDetailSpecifications,
  LaptopDetailSpecifications,
} from "@/components/shared";
import { getLinkUrlCategory } from "@/lib/getUrlCategory";

const ProductDetailSpecifications = ({ product }: { product: any }) => {
  const brand = product.brand.toLowerCase();
  return (
    <div>
      {getLinkUrlCategory(brand) === "cameras" && (
        <CameraDetailSpecifications product={product} />
      )}
      {getLinkUrlCategory(brand) === "monitors" && (
        <MonitorDetailSpecifications product={product} />
      )}
      {getLinkUrlCategory(brand) === "laptops" && (
        <LaptopDetailSpecifications product={product} />
      )}
    </div>
  );
};

export default ProductDetailSpecifications;
