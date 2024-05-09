import { Button } from "@/components/ui/button";
import {ShoppingCart} from "lucide-react"

import Image from "next/image";

export default function Home() {

  return (
    <>
      <section className="grid grid-cols-2">
        <div className="self-center">
          <h1 className="text-6xl font-bold leading-tight">
            Discover Our Latest <br /> <span>Stylish Watches</span>
          </h1>
          <p className="my-4 font-semibold text-xl">
            Experience sophistication with our latest watch collection
          </p>
          <p className="font-medium">
            Don&apos;t Miss Out: Limited Time Offer - Up to{" "}
            <span className="text-destructive font-semibold text-2xl animate-pulse mx-2">
              25%{" "}
            </span>{" "}
            Off!
          </p>
          <Button size="lg" className=" text-lg mt-6 hover:bg-secondary hover:text-black  shadow-2xl   ">Explore Now <ShoppingCart className="inline-flex ml-2"/></Button>
        </div>
        <div>
          <Image
            src="/watch.png"
            width={550}
            height={550}
            alt="New Arrival Watch"
          />
        </div>
      </section>
      <section></section>
    </>
  );
}
