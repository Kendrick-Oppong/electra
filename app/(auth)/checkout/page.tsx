"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Truck, CreditCard, ClipboardCheck } from "lucide-react";
import {
  ConfirmReview,
  PaymentMode,
  ShippingForm,
  ShippingSummary,
} from "@/components/checkout";
import { ButtonLink } from "@/components/shared";
import { useAppSelector } from "@/redux/hooks";
import {
  getAllPaymentMode,
  getAllShippingFormData,
} from "@/redux/features/checkoutSlice";
import { getAllLocalStorageCartProduct } from "@/redux/features/cartSlice";

// Dynamically import PaystackButton with SSR disabled
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false },
);

const CheckOutPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const paymentMode = useAppSelector(getAllPaymentMode);
  const cartItems = useAppSelector(getAllLocalStorageCartProduct);

  const { firstName, lastName, phoneNumber, email } = useAppSelector(
    getAllShippingFormData,
  );

  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const paystackProps = {
    email,
    amount: totalPrice * 100 * 13,
    custom_fields: {
      name: `${firstName} ${lastName}`,
      phone: phoneNumber,
    },
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
    currency: "GHS",
    text: "Pay",
    onSuccess: () => router.push("/success"),
    onClose: () => router.push("/payment-failed"),
  };

  const steps = [
    { icon: <Truck />, label: "Shipping" },
    { icon: <CreditCard />, label: "Payment" },
    { icon: <ClipboardCheck />, label: "Review" },
  ];

  const nextStep = () => setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1705948482595-606e2848c65b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-full min-h-64 w-full flex-col items-center justify-center bg-[#00000065] text-white backdrop-blur-sm">
          <h1 className="text-4xl font-bold">Checkout</h1>
        </div>
      </div>

      <section className="mx-2 sm:mx-5 border-gray grid gap-4 rounded-sm py-4 lg:grid-cols-[1fr_26rem] lg:py-0">
        <div className="self-center px-4 lg:mt-4">
          <div className="flex items-center justify-between space-x-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex ${step.label === "Review" ? "w-auto" : "w-full"} items-center`}
              >
                {/* Step Icon */}
                <div
                  className={`flex h-12 w-[3.5rem] items-center justify-center rounded-full ${
                    currentStep >= index + 1
                      ? "bg-primary/90 text-white"
                      : "bg-secondary text-white"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Line Connector */}
                {index < steps.length - 1 && (
                  <div
                    className={`h-[2px] w-full ${
                      currentStep > index + 1 ? "bg-primary" : "bg-secondary"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          {/* Content Section */}
          <section className="mx-0 mb-0 mt-16">
            <div className="">
              {currentStep === 1 && <ShippingForm onNext={nextStep} />}{" "}
              {/* Pass onNext prop */}
              {currentStep === 2 && (
                <div>
                  <h1 className="mb-4 rounded-sm bg-secondary p-2 text-center text-xl font-semibold">
                    Choose Payment Mode
                  </h1>
                  <PaymentMode />
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <ConfirmReview />
                </div>
              )}
              {/* Step 3 Button Logic */}
              <div className="mt-8 flex justify-center gap-2">
                {currentStep > 1 && (
                  <ButtonLink
                    className={`${currentStep === 3 && "mb-5 mt-0"}`}
                    type="button"
                    onClick={prevStep}
                  >
                    Back
                  </ButtonLink>
                )}

                {/* Render "Next" button only if it's not step 3 */}
                {currentStep !== 1 && currentStep < 3 && (
                  <ButtonLink type="button" onClick={nextStep}>
                    Next
                  </ButtonLink>
                )}

                {/* Conditional rendering for Step 3 based on payment mode */}
                {currentStep === 3 && (
                  <>
                    {paymentMode === "Cash" || paymentMode === "" ? (
                      <ButtonLink
                        className="mb-5 mt-0"
                        type="button"
                        onClick={() => router.push("/success")}
                      >
                        Confirm
                      </ButtonLink>
                    ) : (
                      <PaystackButton
                        className="h-11 rounded-md border bg-primary px-8 text-lg text-white shadow-2xl hover:border-primary hover:bg-secondary hover:text-black"
                        {...paystackProps}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
        <div className="border-gray-500 lg:border-l">
          <ShippingSummary />
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;
