"use client";
import { useState } from "react";
import { Truck, CreditCard, ClipboardCheck, Banknote } from "lucide-react";
import { ShippingForm, ShippingSummary } from "@/components/checkout";
import { ButtonLink } from "@/components/shared";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CheckOutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

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

      <section className="grid lg:grid-cols-[1fr_26rem] border-gray py-4 lg:py-0 gap-4 rounded-sm">
        <div className="self-center px-4">
          <div className="flex items-center justify-between space-x-4">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex ${step.label === "Review" ? "w-auto" : "w-full"} items-center`}>
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
          <section className="mx-0 mt-16">
            <div className="space-y-6">
              {currentStep === 1 && <ShippingForm onNext={nextStep} />}{" "}
              {/* Pass onNext prop */}
              {currentStep === 2 && (
                <div>
                  <h2 className="mb-4 font-semibold text-center">Choose Payment Mode</h2>
                  <div>
                    <ToggleGroup variant="outline" size="lg" type="single">
                      <ToggleGroupItem value="cash" aria-label="Toggle bold">
                        <Banknote size={30} className="mr-2"/>
                        Cash
                      </ToggleGroupItem>
                      <ToggleGroupItem value="card" aria-label="Toggle italic">
                        <CreditCard size={30} className="mr-2"/>
                        Card
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <h2 className="mb-4 font-semibold">Review & Confirm</h2>
                  {/* Order review content goes here */}
                </div>
              )}
              <div className="mt-8 flex justify-center gap-2">
                {currentStep > 1 && (
                  <ButtonLink type="button" onClick={prevStep}>
                    Back
                  </ButtonLink>
                )}
                {currentStep !== 1 && (
                  <ButtonLink type="button" onClick={nextStep}>
                    {currentStep === 3 ? "Confirm" : "Next"}
                  </ButtonLink>
                )}
              </div>
            </div>
          </section>
        </div>
        <div className="lg:border-l border-gray-500">
          <ShippingSummary />
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;
