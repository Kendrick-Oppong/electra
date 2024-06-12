"use client"

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
import { Input } from "@/components/ui/input";
import { contactUsSchema } from "@/validators/formSchema";
import { Asterisk, RotateCw, SendHorizontal } from "lucide-react";
import { ButtonLink } from "@/components/shared";
// import { handleErrorToast, isError } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";



const ContactUsForm = () => {
 const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitSuccessful },
  } = form;


 return <div className="max-w-6xl mx-auto text-lg ">
      <div className="px-3 pb-10 border border-primary rounded-lg mx-auto mb-10 shadow-2xl">
        <Form {...form}>
          <form
            autoComplete="fff"
            className="mt-4"
          >
            <div className="grid sm:grid-cols-2 sm:gap-4 mb-6">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Name
                      <Asterisk className="inline-flex w-4 h-4 text-red-600" />
                    </FormLabel>
                    <FormControl className="">
                      <Input
                        {...field}
                        // disabled={isSending}
                        placeholder="Enter your name"
                        type="text"
                        // className={`${
                        //   isError(field.name, errors, form)
                        //     ? "border-red-500 focus-visible:ring-red-500"
                        //     : "border-green600"
                        // }`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email{" "}
                      <Asterisk className="inline-flex w-4 h-4 text-red-600" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        // disabled={isSending}
                        placeholder="Enter your email"
                        type="email"
                        // className={`${
                        //   isError(field.name, errors, form)
                        //     ? "border-red-500 focus-visible:ring-red-500"
                        //     : "border-green600"
                        // }`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Subject{" "}
                    <Asterisk className="inline-flex w-4 h-4 text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      // disabled={isSending}
                      placeholder="Title of message"
                      type="text"
                      // className={`${
                      //   isError(field.name, errors, form)
                      //     ? "border-red-500 focus-visible:ring-red-500"
                      //     : "border-green600"
                      // }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-6">

            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Message{" "}
                    <Asterisk className="inline-flex w-4 h-4 text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      // disabled={isSending}
                      placeholder="Write to us..."
                      rows={5}
                      maxLength={200}
                      // className={`w-full resize-none ${
                        //   isError(field.name, errors, form)
                        //     ? "border-red-500 focus-visible:ring-red-500"
                        //     : "border-green600"
                        // }`}
                        />
                  </FormControl>
                  {field.value.length > 0 && (
                    <small
                    className={`${
                      field.value.length === 200
                      ? "text-destructive dark:text-red-500"
                      : ""
                      }`}
                      >
                      {field.value.length === 200
                        ? "Maximum characters exceeded"
                        : `${Math.round(
                          (field.value.length / 200) * 100
                          )}% of maximum length (${field.value.length}/${200})`}
                    </small>
                  )}
                  <FormMessage />
                </FormItem>
              )}
              />
              </div>
            <ButtonLink
            //   disable={isSending}
              className="w-full mt-4"
              type="submit"
            //   onClick={() => handleErrorToast(isValid)}
            >
                Send Message
              {/* {isSending ? (
                <>
                  Sending message
                  <RotateCw className="w-5 h-5 ml-1 animate-spin" />
                </>
              ) : (
                <>
                  Send message <SendHorizontal className="ml-2" />
                </>
              )} */}
            </ButtonLink>
          </form>
        </Form>
      </div>
    </div>
}


export default ContactUsForm