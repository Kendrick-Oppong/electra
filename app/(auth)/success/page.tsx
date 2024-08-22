import { ButtonLink } from "@/components/shared";
import { nanoid } from "@reduxjs/toolkit";
import { CircleCheck } from "lucide-react";

import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="text-center">
      <div className="mx-auto w-fit rounded-full bg-green-500 text-white">
        <CircleCheck size={60} />
      </div>
      <h1 className="my-4 text-2xl font-bold">Thank You for Your Order!</h1>

      <p>Your order has been successfully placed and is being processed</p>
      <p className="mt-2">Order ID: <span className="font-medium"> {nanoid()}</span></p>
      <Link href="/">
        <ButtonLink>Continue Shopping</ButtonLink>
      </Link>
    </section>
  );
};

export default SuccessPage;
