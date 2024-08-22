"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Asterisk } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ShippingFormSchema } from "@/validators/formSchema";
import toast from "react-hot-toast";
import { ButtonLink } from "@/components/shared";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addShippingForm,
  getAllShippingFormData,
} from "@/redux/features/checkoutSlice";

const ShippingForm = ({ onNext }: { onNext: () => void }) => {
  const dispatch = useAppDispatch();
  const { city, firstName, lastName, phoneNumber, region, email } =
    useAppSelector(getAllShippingFormData);

  const form = useForm<z.infer<typeof ShippingFormSchema>>({
    resolver: zodResolver(ShippingFormSchema),
    defaultValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      region: region || "",
      city: city || "",
      phoneNumber: phoneNumber || "",
      email: email || "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = form;

  async function onSubmit(data: z.infer<typeof ShippingFormSchema>) {
    dispatch(addShippingForm(data));
    if (isValid) {
      onNext();
    }
  }

  return (
    <>
      <div className="text-lg">
        <h1 className="mb-4 text-center text-xl font-semibold bg-secondary p-2 rounded-sm ">
          Shipping Address
        </h1>
        <div className="mb-10 rounded-lg border border-primary px-3 pb-10 shadow-2xl">
          <Form {...form}>
            <form
              autoComplete="fff"
              className="mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid-cols-2 gap-4 sm:grid">
                <div>
                  <FormField
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          FirstName
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your first name"
                            type="text"
                            className={`${
                              errors.firstName
                                ? "border-destructive focus-visible:ring-destructive"
                                : "border-primary"
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <FormField
                    control={control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          LastName
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your last name"
                            type="text"
                            className={`${
                              errors.lastName
                                ? "border-destructive focus-visible:ring-destructive"
                                : "border-primary"
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="mt-4 grid-cols-2 gap-4 sm:grid">
                <div>
                  <FormField
                    control={control}
                    name="region"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          Region
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your region"
                            type="text"
                            className={`${
                              errors.region
                                ? "border-destructive focus-visible:ring-destructive"
                                : "border-primary"
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <FormField
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          City
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your city"
                            type="text"
                            className={`${
                              errors.city
                                ? "border-destructive focus-visible:ring-destructive"
                                : "border-primary"
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="mt-4 grid-cols-2 gap-4 sm:grid">
                <div>
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          Email
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your email"
                            type="tel"
                            className={`${
                              errors.email
                                ? "border-destructive focus-visible:ring-destructive"
                                : "border-primary"
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <FormField
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          Phone Number
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your phone number"
                            type="tel"
                            className={`${
                              errors.phoneNumber
                                ? "border-destructive focus-visible:ring-destructive"
                                : "border-primary"
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <ButtonLink
                className="mt-4 w-full"
                type="submit"
                onClick={() =>
                  !isValid && toast.error("Please fill all fields")
                }
              >
                Next
              </ButtonLink>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;
