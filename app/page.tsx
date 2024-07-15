import Link from "next/link"
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Headset, Rocket, Banknote } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FeaturedCamera,
  FeaturedLaptop,
  FeaturedMonitor,
} from "@/components/home/featured";
import { ButtonLink,ModalNewsLetter } from "@/components/shared";
import { NewArrival } from "@/components/home/newArrival";
import { TestimonyCarousel } from "@/components/home/testimonial";

export default async function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="mx-0 mt-0 grid bg-accent px-5 md:grid-cols-2">
        <div className="self-center">
          <h1 className="pt-7 text-[2.3rem] font-bold leading-tight md:pt-0 lg:text-6xl">
            Discover Our Latest <br /> <span>Stylish Monitors</span>
          </h1>
          <p className="my-4 text-xl font-semibold">
            Experience sophistication with our latest watch collection
          </p>
          <p className="font-medium">
            Don&apos;t Miss Out: Limited Time Offer - Up to{" "}
            <span className="mx-2 animate-pulse text-2xl font-semibold text-destructive">
              25%{" "}
            </span>{" "}
            Off!
          </p>
          <Link href="/shop/monitors/samsung">
            <ButtonLink>
              Explore Now <ShoppingCart className="ml-2 inline-flex" />
            </ButtonLink>
          </Link>
        </div>
        <div className="relative">
          <Image
            src="/monitor.png"
            width={550}
            height={550}
            sizes="(max-width:768px) 100vw, 550px"
            alt="New Arrival Monitor"
            priority
            className="mx-auto"
          />
        </div>
      </section>

      {/* Services */}
      <section className="flex-wrap gap-6 space-y-7 sm:flex sm:space-y-0">
        <div className="flex-1 rounded-lg border border-primary p-4 shadow-2xl hover:bg-secondary">
          <Rocket className="text-primary" size={70} />
          <h2 className="my-3 text-xl font-bold sm:min-w-max md:min-w-full">
            Effortless Shipping & Delivery
          </h2>
          <p>
            Experience our seamless shipping process, ensuring your orders reach
            you quickly and efficiently. With our reliable delivery services,
            your satisfaction is our priority
          </p>
        </div>
        <div className="flex-1 rounded-lg border border-primary p-4 shadow-2xl hover:bg-secondary">
          <Banknote className="text-primary" size={70} />
          <h2 className="my-3 text-xl font-bold sm:min-w-max md:min-w-full">
            Guaranteed Satisfaction
          </h2>
          <p>
            Shop with confidence knowing that your purchase is backed by our
            30-day money-back guarantee. If you&apos;re not completely
            satisfied, we&apos;ll refund your purchase hassle-free
          </p>
        </div>
        <div className="flex-1 rounded-lg border border-primary p-4 shadow-2xl hover:bg-secondary">
          <Headset className="text-primary" size={70} />
          <h2 className="my-3 text-xl font-bold">24/7 Customer Support</h2>
          <p>
            Access our round-the-clock customer support whenever you need
            assistance. Our knowledgeable team is here to address your inquiries
            and provide solutions promptly, ensuring a seamless shopping
            experience
          </p>
        </div>
      </section>

      {/* Hot deals */}
      <section className="mx-0 rounded-lg shadow-2xl md:flex">
        <div className="basis-1/3 bg-accent p-5">
          <Image
            src="/hp.png"
            width={400}
            height={400}
            sizes="(max-width:768px) 100vw, 400px"
            alt=""
            priority
            className="w-[350px] md:w-auto"
          />
          <h2 className="text-2xl font-bold leading-tight">
            High Quality Hp Laptops
          </h2>
          <p className="my-3 font-medium">
            Up to{" "}
            <span className="mx-2 animate-pulse text-2xl font-semibold text-destructive">
              50%{" "}
            </span>{" "}
            Off!
          </p>
          <Link href="/shop/laptops/hp">
            <ButtonLink className="mb-6 md:mb-0">
              Shop Now <ShoppingCart className="ml-2 inline-flex" />
            </ButtonLink>
          </Link>
        </div>
        <div className="grid w-full flex-1 bg-secondary md:grid-cols-2">
          <div className="order-1 self-center p-4 md:order-none">
            <Badge
              variant="destructive"
              className="mb-8 rounded-lg p-2 text-base"
            >
              Exclusive Weekend Offer
            </Badge>
            <h2 className="text-2xl font-bold leading-tight lg:text-4xl">
              High-Performance Digital Camera
            </h2>
            <p className="my-3 font-medium">
              Last call for up to{" "}
              <span className="mx-2 animate-pulse text-2xl font-semibold text-destructive">
                25%{" "}
              </span>{" "}
              Off!
            </p>
            <Link href="/shop/cameras/sony">
              <ButtonLink>
                Shop Now <ShoppingCart className="ml-2 inline-flex" />
              </ButtonLink>
            </Link>
          </div>
          <div className="my-auto">
            <Image
              src="/camera.png"
              width={400}
              height={400}
              sizes="(max-width:768px) 100vw, 400px"
              alt="canon camera"
              priority
              className="w-[350px] md:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h1 className="text-subtitle">Featured Products</h1>
        <Tabs defaultValue="camera" className="">
          <TabsList className="mb-8 flex gap-3 rounded-none bg-transparent">
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
      <section className="">
        <h1 className="text-subtitle">Categories</h1>
        <div className="flex flex-wrap rounded-md gap-4">
          <div className="min-h-72 rounded-md flex-1 bg-[url('https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat backdrop-blur-sm">
            <div className="flex rounded-md h-full flex-col items-center justify-center bg-[#00000045] text-3xl text-white backdrop-blur-sm">
              <h2 className="opacity-1">Camera</h2>
              <Link href="/shop/cameras">
                <ButtonLink>View Collection</ButtonLink>
              </Link>
            </div>
          </div>
          <div className="min-h-72 rounded-md flex-1 bg-[url('https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat backdrop-blur-sm">
            <div className="flex rounded-md h-full flex-col items-center justify-center bg-[#00000045] text-3xl text-white backdrop-blur-sm">
              <h2 className="opacity-1">Laptop</h2>
              <Link href="/shop/laptops">
                <ButtonLink>View Collection</ButtonLink>
              </Link>
            </div>
          </div>
          <div className="min-h-72 rounded-md flex-1 bg-[url('https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat backdrop-blur-sm">
            <div className="flex rounded-md h-full flex-col items-center justify-center bg-[#00000045] text-3xl text-white backdrop-blur-sm">
              <h2 className="opacity-1">Monitor</h2>
              <Link href="/shop/monitors">
                <ButtonLink>View Collection</ButtonLink>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section>
        <h1 className="text-subtitle">New Arrival</h1>
        <NewArrival />
      </section>

      <ModalNewsLetter/>

      {/* Testimonials */}
      <section className="mt-16">
        <h1 className="mx-auto w-fit rounded-lg bg-accent px-2 py-1 text-center text-xl font-bold">
          Testimonials
        </h1>
        <h1 className="text-subtitle !mt-1">What Customers Say About Us</h1>

        <TestimonyCarousel />
      </section>
    </>
  );
}
