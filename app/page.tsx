import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Headset, Rocket, Banknote } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FeaturedCamera,
  FeaturedLaptop,
  FeaturedMonitor,
} from "@/components/home/featured";
import { ButtonLink } from "@/components/shared";
import { NewArrival } from "@/components/home/newArrival";
import { TestimonyCarousel } from "@/components/home/testimonial";

export default async function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="grid md:grid-cols-2 bg-accent px-5 mt-0 mx-0">
        <div className="self-center">
          <h1 className="text-5xl pt-7 md:text-4xl lg:text-6xl md:pt-0   font-bold leading-tight">
            Discover Our Latest <br /> <span>Stylish Monitors</span>
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
          <ButtonLink>
            Explore Now <ShoppingCart className="inline-flex ml-2" />
          </ButtonLink>
        </div>
        <div className="relative">
          <Image
            src="/monitor.png"
            width={550}
            height={550}
            sizes="(max-width:768px) 100vw, 550px"
            alt="New Arrival Monitor"
            priority
          />
        </div>
      </section>

      {/* Services */}
      <section className="space-y-7 sm:space-y-0 sm:flex flex-wrap gap-6 mx-10">
        <div className="flex-1 border border-primary rounded-lg shadow-2xl p-4 hover:bg-secondary">
          <Rocket className="text-primary" size={70} />
          <h2 className="text-xl sm:min-w-max md:min-w-full font-bold my-3">
            Effortless Shipping & Delivery
          </h2>
          <p>
            Experience our seamless shipping process, ensuring your orders reach
            you quickly and efficiently. With our reliable delivery services,
            your satisfaction is our priority
          </p>
        </div>
        <div className="flex-1 border border-primary rounded-lg shadow-2xl p-4 hover:bg-secondary">
          <Banknote className="text-primary" size={70} />
          <h2 className="text-xl sm:min-w-max md:min-w-full  font-bold my-3">
            Guaranteed Satisfaction
          </h2>
          <p>
            Shop with confidence knowing that your purchase is backed by our
            30-day money-back guarantee. If you&apos;re not completely
            satisfied, we&apos;ll refund your purchase hassle-free
          </p>
        </div>
        <div className="flex-1 border border-primary rounded-lg shadow-2xl p-4 hover:bg-secondary">
          <Headset className="text-primary " size={70} />
          <h2 className="text-xl font-bold my-3">24/7 Customer Support</h2>
          <p>
            Access our round-the-clock customer support whenever you need
            assistance. Our knowledgeable team is here to address your inquiries
            and provide solutions promptly, ensuring a seamless shopping
            experience
          </p>
        </div>
      </section>

      {/* Hot deals */}
      <section className="md:flex mx-0 shadow-2xl rounded-lg">
        <div className="basis-1/3 bg-accent p-5">
          <Image
            src="/hp.png"
            width={400}
            height={400}
            sizes="(max-width:768px) 100vw, 400px"
            alt="New Arrival Phone"
            priority
            className=""
          />
          <h2 className="text-2xl font-bold leading-tight">
            High Quality Hp Laptops
          </h2>
          <p className="font-medium my-3">
            Up to{" "}
            <span className="text-destructive font-semibold text-2xl animate-pulse mx-2">
              50%{" "}
            </span>{" "}
            Off!
          </p>
          <ButtonLink className="mb-6 md:mb-0">
            Shop Now <ShoppingCart className="inline-flex ml-2" />
          </ButtonLink>
        </div>
        <div className="flex-1 bg-secondary grid md:grid-cols-2 w-full">
          <div className="self-center p-4 order-1 md:order-none">
            <Badge
              variant="destructive"
              className="p-2 text-base mb-8 rounded-lg"
            >
              Exclusive Weekend Offer
            </Badge>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
              High-Performance Digital Camera
            </h2>
            <p className="font-medium my-3">
              Last call for up to{" "}
              <span className="text-destructive font-semibold text-2xl animate-pulse mx-2">
                25%{" "}
              </span>{" "}
              Off!
            </p>
            <ButtonLink>
              Shop Now <ShoppingCart className="inline-flex ml-2" />
            </ButtonLink>
          </div>
          <div className="my-auto ">
            <Image
              src="/camera.png"
              width={400}
              height={400}
              sizes="(max-width:768px) 100vw, 400px"
              alt="canon camera"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h1 className="text-subtitle">Featured Products</h1>
        <Tabs defaultValue="camera" className="">
          <TabsList className="flex gap-3 mb-8 bg-transparent rounded-none">
            <TabsTrigger value="camera">Camera</TabsTrigger>
            <TabsTrigger value="laptop">Laptop</TabsTrigger>
            <TabsTrigger value="monitor">Monitor</TabsTrigger>
          </TabsList>
          <TabsContent value="camera">
            <FeaturedCamera />
          </TabsContent>
          <TabsContent value="laptop">
            <FeaturedLaptop />
          </TabsContent>
          <TabsContent value="monitor">
            <FeaturedMonitor />
          </TabsContent>
        </Tabs>
      </section>

      {/* Categories */}
      <section className="mx-5">
        <h1 className="text-subtitle">Categories</h1>
        <div className="flex flex-wrap gap-4">
          <div className="bg-[url('https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-72  backdrop-blur-sm bg-cover bg-no-repeat bg-center flex-1">
            <div className="flex flex-col justify-center items-center  bg-[#00000045]  backdrop-blur-sm text-3xl text-white h-full ">
              <h2 className="opacity-1">Camera</h2>
              <ButtonLink>View Collection</ButtonLink>
            </div>
          </div>
          <div className="bg-[url('https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-72  backdrop-blur-sm bg-cover bg-no-repeat bg-center flex-1 ">
            <div className="flex flex-col justify-center items-center  bg-[#00000045]  backdrop-blur-sm text-3xl text-white h-full  ">
              <h2 className="opacity-1">Laptop</h2>
              <ButtonLink>View Collection</ButtonLink>
            </div>
          </div>
          <div className="bg-[url('https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-72  backdrop-blur-sm bg-cover bg-no-repeat bg-center flex-1 ">
            <div className="flex flex-col justify-center items-center  bg-[#00000045]  backdrop-blur-sm text-3xl text-white h-full  ">
              <h2 className="opacity-1">Monitor</h2>
              <ButtonLink>View Collection</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section>
        <h1 className="text-subtitle">New Arrival</h1>
        <NewArrival />
      </section>
      

      {/* Testimonials */}
      <section className="mt-16">
        <h1 className="text-center w-fit py-1 px-2 mx-auto text-xl font-bold bg-accent rounded-lg ">
          Testimonials
        </h1>
        <h1 className="text-subtitle !mt-1 ">What Customers Say About Us</h1>

        <TestimonyCarousel />
      </section>
    </>
  );
}
