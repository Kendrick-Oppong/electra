import {
  CameraDetailSpecifications,
  MonitorDetailSpecifications,
  LaptopDetailSpecifications,
} from "@/components/shared";
import { getLinkUrlCategory } from "@/lib/getUrlCategory";
import { Camera, Laptop, Monitor } from "@/types";
type ProductType = Camera | Laptop | Monitor;

const ProductDetailSpecifications = ({ product }: { product: ProductType }) => {
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
