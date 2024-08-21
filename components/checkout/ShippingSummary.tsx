"use client";
import { getAllLocalStorageCartProduct } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const ShippingSummary = () => {
  const cartItems = useAppSelector(getAllLocalStorageCartProduct);

  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
   (
      <section>
        <h1 className="text-center text-2xl font-semibold text-primary">
          Summary
        </h1>
        <Separator className="my-2" />
        <div className="my-4 flex items-center justify-between font-semibold">
          <p>All products</p>
          <p className="text-primary">{cartItems?.length}</p>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between font-semibold">
          <p>Total</p>
          <p className="text-destructive">${totalPrice}</p>
        </div>

        <div>
          <ScrollArea className="h-[26rem]" style={{ scrollbarWidth: "none" }}>
            <div className="mt-8">
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <div key={item._id} className="mb-4 flex items-center gap-4">
                    <div>
                      <Image
                        src={item.images.primaryImage}
                        width={50}
                        height={50}
                        className="h-[50px] w-[50px] object-scale-down"
                        quality={100}
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <h2 className="truncate text-base font-semibold">
                        {item.title}
                      </h2>
                      <p className="text-sm font-medium text-destructive">
                        <span className="font-bold">{item.quantity}</span> × $
                        {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
      </section>
    )
  );
};

export default ShippingSummary;
