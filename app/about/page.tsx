import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { StatisticsCountUp } from "@/components/aboutUs";
import { TestimonyCarousel } from "@/components/home/testimonial";
import { Banknote, Headset, Rocket } from "lucide-react";

const AboutUsPage = () => {
  return (
    <>
      <section>
        <div
          className={`flex flex-col rounded-lg items-center justify-center bg-[url('https://images.unsplash.com/photo-1518109623266-338ba2429e4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat`}
        >
          <div className="flex min-h-80 w-full rounded-lg flex-col items-center justify-center bg-[#00000065] text-white backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="mt-14 flex flex-col justify-center">
          <Badge
            variant="default"
            className="mb-3 w-fit mx-auto rounded-sm p-2 text-base"
          >
            Our Statistics
          </Badge>
          <h1 className="text-subtitle !mt-0  text-primary">
            Top-tier Service and Care
          </h1>
          <p className="mb-6 text-lg font-semibold">
            At our eCommerce store, we are dedicated to providing the best
            technology products with exceptional service. Whether you&apos;re a
            professional photographer, a gaming enthusiast, or just need a
            reliable laptop, we have the right products for you
          </p>

          <StatisticsCountUp />
        </div>
        <div className="grid-template mt-8 gap-6 mx-auto">
          <Image
            src="/about-1.jpg"
            width={400}
            height={400}
            alt=""
            priority
            className="rounded-lg object-cover shadow-lg"
          />

          <Image
            src="/about-2.jpg"
            width={400}
            height={400}
            alt=""
            priority
            className="rounded-lg object-cover shadow-lg"
          />

          <Image
            src="/about-3.jpg"
            width={400}
            height={400}
            alt=""
            priority
            className="rounded-lg object-cover shadow-lg"
          />

          <Image
            src="/about-4.jpg"
            width={400}
            height={400}
            alt=""
            priority
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Services */}
      <h1 className="mx-auto mt-16 w-fit rounded-lg bg-accent px-2 py-1 text-center text-xl font-bold">
        Why Choose Us?
      </h1>
      <section className="mx-5 flex-wrap gap-6 space-y-7 sm:flex sm:space-y-0">
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
};

export default AboutUsPage;
