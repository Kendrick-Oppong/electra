import { Send } from "lucide-react";
import NewsletterForm from "./NewsletterForm"

const Newsletter = () => {
  return (
    <section className="md:flex flex-wra gap-4 items-center bg-border py-12 px-5 mx-0 mb-1 shadow-lg">
      <div className="flex flex-1 gap-4 items-center mb-8 md:mb-0">
        <div className="text-primary">
          <Send size={80} />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-primary">
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
