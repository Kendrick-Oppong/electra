import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {ShoppingCart,Headset,Rocket,Banknote} from "lucide-react"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dbConnect from "@/lib/dbConnect";

export default async function Home() {
await dbConnect()
  return (
    <>
      {/* Hero section */}
      <section className="grid grid-cols-2 bg-accent px-5 mt-0">
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
          <Button
            size="lg"
            className="text-lg mt-6 border hover:bg-secondary hover:border-primary hover:text-black  shadow-2xl"
          >
            Explore Now <ShoppingCart className="inline-flex ml-2" />
          </Button>
        </div>
        <div className="relative">
          <Image
            src="/watch.png"
            width={550}
            height={550}
            sizes="(max-width:768px) 100vw, 550px"
            alt="New Arrival Watch"
          />
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-wrap gap-6 mx-10">
        <div className="flex-1 border border-primary rounded-lg shadow-2xl p-4 hover:bg-secondary">
          <Rocket className="text-primary " size={70} />
          <h2 className="text-primary font-bold my-3">
            Effortless Shipping & Delivery
          </h2>
          <p>
            Experience our seamless shipping process, ensuring your orders reach
            you quickly and efficiently. With our reliable delivery services,
            your satisfaction is our priority
          </p>
        </div>
        <div className="flex-1 border border-primary rounded-lg shadow-2xl p-4 hover:bg-secondary">
          <Banknote className="text-primary " size={70} />
          <h2 className="text-primary font-bold my-3">
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
          <h2 className="text-primary font-bold my-3">24/7 Customer Support</h2>
          <p>
            Access our round-the-clock customer support whenever you need
            assistance. Our knowledgeable team is here to address your inquiries
            and provide solutions promptly, ensuring a seamless shopping
            experience
          </p>
        </div>
      </section>

      {/* Hot deals */}
      <section className="flex  shadow-2xl rounded-lg">
        <div className="bg-accent p-5">
          <Image
            src="/samsung.png"
            width={550}
            height={550}
            sizes="(max-width:768px) 100vw, 550px"
            alt="New Arrival Phone"
          />
          <h1 className="text-xl font-bold leading-tight">
            Samsung Galaxy Series Phone
          </h1>
          <p className="font-medium my-3">
            Up to{" "}
            <span className="text-destructive font-semibold text-2xl animate-pulse mx-2">
              50%{" "}
            </span>{" "}
            Off!
          </p>
          <Button size="lg" className="text-lg mt-2 shadow-2xl">
            Shop Now <ShoppingCart className="inline-flex ml-2" />
          </Button>
        </div>
        <div className="bg-secondary grid grid-cols-2">
          <div className="self-center p-4">
            <Badge
              variant="destructive"
              className="p-2 text-base mb-8 rounded-lg"
            >
              Exclusive Weekend Offer
            </Badge>
            <h1 className="text-4xl font-bold leading-tight">
              High-Performance Digital Camera
            </h1>
            <p className="font-medium my-3">
              Last call for up to{" "}
              <span className="text-destructive font-semibold text-2xl animate-pulse mx-2">
                25%{" "}
              </span>{" "}
              Off!
            </p>
            <Button size="lg" className="text-lg mt-2 shadow-2xl">
              Shop Now <ShoppingCart className="inline-flex ml-2" />
            </Button>
          </div>
          <div className="my-auto">
            <Image
              src="/camera.png"
              width={550}
              height={550}
              sizes="(max-width:768px) 100vw, 550px"
              alt="canon camera"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h1 className="text-center font-bold text-2xl mt-10 mb-5">
          Featured Products
        </h1>
        <Tabs defaultValue="camera" className="">
          <TabsList className="flex gap-3 mb-8 bg-transparent rounded-none">
            <TabsTrigger value="camera">Camera</TabsTrigger>
            <TabsTrigger value="laptop">Laptop</TabsTrigger>
            <TabsTrigger value="smartphone">Smartphone</TabsTrigger>
            <TabsTrigger value="watch">Watch</TabsTrigger>
          </TabsList>
          <TabsContent value="camera">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil
            veniam eum id fuga a qui deleniti corrupti, inventore ullam
            accusamus odio unde error pariatur minima dolore reprehenderit
            necessitatibus distinctio. Make changes to your account here.
          </TabsContent>
          <TabsContent value="laptop">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil
            veniam eum id fuga a qui deleniti corrupti, inventore ullam
            accusamus odio unde error pariatur minima dolore reprehenderit
            necessitatibus distinctio. Make changes to your account here.
          </TabsContent>
          <TabsContent value="smartphone">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil
            veniam eum id fuga a qui deleniti corrupti, inventore ullam
            accusamus odio unde error pariatur minima dolore reprehenderit
            necessitatibus distinctio. Make changes to your account here.
          </TabsContent>
          <TabsContent value="watch">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil
            veniam eum id fuga a qui deleniti corrupti, inventore ullam
            accusamus odio unde error pariatur minima dolore reprehenderit
            necessitatibus distinctio. Make changes to your account here.
          </TabsContent>
        </Tabs>
      
      </section>
    </>
  );
}
