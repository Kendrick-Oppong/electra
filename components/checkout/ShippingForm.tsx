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

const ShippingForm = ({ onNext }: { onNext: () => void }) => {
  const form = useForm<z.infer<typeof ShippingFormSchema>>({
    resolver: zodResolver(ShippingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      region: "",
      city: "",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitSuccessful, isSubmitting },
  } = form;

  async function onSubmit(data: z.infer<typeof ShippingFormSchema>) {
    console.log(data);
    if (isValid) {
      onNext();
    }
  }

  return (
    <>
      <div className="text-lg">
        <div className="mb-10 rounded-lg border border-primary px-3 pb-10 shadow-2xl">
          <Form {...form}>
            <form
              autoComplete="fff"
              className="mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="sm:grid grid-cols-2 gap-4">
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
                            disabled={isSubmitting}
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
                <div>
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
                            disabled={isSubmitting}
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

              <div className="mt-6 sm:grid grid-cols-2 gap-4">
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
                            disabled={isSubmitting}
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
                <div>
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
                            disabled={isSubmitting}
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
