import getBase64 from "@/lib/getBase64";
import Image from "next/image";
import { Camera } from "@/types/cameraSchema";
import { Laptop } from "@/types/laptopSchema";
import { Monitor } from "@/types/monitorSchema";

type ProductType = Camera | Laptop | Monitor;

const BlurredImageLoader = async ({ product }: { product: ProductType }) => {
  const mainImage = product.images.primaryImage;
  const blurData = await getBase64(mainImage);
  return (
    <Image
      src={mainImage}
      alt=""
      placeholder="blur"
      blurDataURL={blurData}
      quality={80}
      width={200}
      height={200}
      sizes="100vw"
      className={`w-44 h-44 mx-auto cursor-pointer`}
      priority
    />
  );
};

export default BlurredImageLoader;
