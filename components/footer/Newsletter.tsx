import { Send } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section className="flex-wra mt-[70px] mx-0 mb-1 items-center gap-4 bg-border px-3 py-12 shadow-lg md:flex">
      <div className="mb-8 flex flex-1 items-center gap-4 md:mb-0">
        <div className="text-primary">
          <Send className="size-16 sm:size-20" />
        </div>
        <div className="flex-1">
          <h1 className="mb-2 text-2xl font-bold text-primary sm:text-3xl">
            Join Our Newsletter Now
          </h1>
          <p className="font-semibold">
            Register now to get updates on promotions
          </p>
        </div>
      </div>
      <div className="relative flex-1">
        <NewsletterForm />
      </div>
    </section>
  );
};

export default Newsletter;
