import { ButtonLink } from "@/components/shared";
import { XCircle } from "lucide-react";
import Link from "next/link";

const FailedTransactionPage = () => {
  return (
    <section className="text-center">
      <div className="mx-auto w-fit rounded-full bg-red-500 text-white">
        <XCircle size={60} />
      </div>
      <h1 className="my-4 text-2xl font-bold">Transaction Failed!</h1>

      <p>We encountered an issue while processing your payment</p>
      <p>Please check your payment details and try again</p>
      
      <div className="sm:space-x-4">

      <Link href="/checkout">
        <ButtonLink className="mt-4 min-w-[12rem]">Retry Payment</ButtonLink>
      </Link>
      
      <Link href="/">
        <ButtonLink className="mt-2 min-w-[12rem]">Return Home</ButtonLink>
      </Link>
      </div>
    </section>
  );
};

export default FailedTransactionPage;
