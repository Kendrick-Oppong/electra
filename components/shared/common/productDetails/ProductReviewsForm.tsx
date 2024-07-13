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
import { Input } from "@/components/ui/input";
import { reviewSchema } from "@/validators/formSchema";
import { Asterisk, Loader, SendHorizontal } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { isError } from "@/lib/isFormFieldError";
import toast from "react-hot-toast";
import { Heart, Rating } from "@smastrom/react-rating";
import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { usePost } from "@/hooks";

interface ProductProps {
  productId: string;
  productType: any;
}

const ProductReviews = ({ productId, productType }: ProductProps) => {
  const [rating, setRating] = useState(1);
  const pathname = usePathname();
  const router = useRouter();
  const [hideForm, setHideForm] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  // In case the user signs out while on the page or is not logged in
  if (!isLoaded || !isSignedIn) {
    router.push("/sign-in");
  }

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: user?.username ?? "",
      comment: "",
    },
  });

  const {
    error,
    isError: isSendingError,
    isPending,
    mutate,
  } = usePost({
    url: "reviews",
    queryKey: `${productType}-${productId}`,
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitSuccessful },
  } = form;

  if (isSendingError) console.log(error?.message);

  // reset form on submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  async function onSubmit(data: z.infer<typeof reviewSchema>) {
    const dataWithPathname = {
      ...data,
      path: pathname,
      rating,
      productId,
      productType,
    };
    // post review data
    mutate(dataWithPathname);
    // hide form
    setHideForm(true);
  }

  return (
    <div>
      <div className="text-center">
        <ButtonLink
          className="mt-0"
          onClick={() => setHideForm((prevState) => !prevState)}
        >
          Add Review
        </ButtonLink>
      </div>

      {hideForm && (
        <div className="mx-auto max-w-6xl text-lg">
          <h1 className="my-4 text-xl font-bold">Add a Review</h1>
          <div className="mx-auto mb-10 rounded-lg border border-primary px-3 pb-10 shadow-2xl">
            <Form {...form}>
              <form
                autoComplete="fff"
                className="mt-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          Your Name
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Title of message"
                            type="text"
                            className={`${
                              isError(field.name, errors, form)
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
                <div className="mt-6">
                  <FormField
                    control={control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Your Review
                          <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            disabled={isPending}
                            placeholder="Add your message..."
                            rows={5}
                            maxLength={200}
                            className={`w-full resize-none ${
                              isError(field.name, errors, form)
                                ? "border-destructive focus-visible:ring-destructive"
                                : "border-primary"
                            }`}
                          />
                        </FormControl>
                        {field.value.length > 0 && (
                          <small
                            className={`${
                              field.value.length === 200
                                ? "text-destructive dark:text-destructive"
                                : ""
                            }`}
                          >
                            {field.value.length === 200
                              ? "Maximum characters exceeded"
                              : `${Math.round(
                                  (field.value.length / 200) * 100,
                                )}% of maximum length (${field.value.length}/${200})`}
                          </small>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-6">
                  <small className="my-3 font-medium">Rate Product</small>
                  <Rating
                    radius="medium"
                    className={`!w-36`}
                    isRequired
                    value={rating}
                    onChange={setRating}
                    itemStyles={{
                      itemShapes: Heart,
                      activeFillColor: "#ff0000",
                      inactiveFillColor: "#ffd700",
                    }}
                  />
                  {rating} out of 5
                </div>
                <ButtonLink
                  disabled={isPending}
                  className="mt-4 w-full"
                  type="submit"
                  onClick={() =>
                    isValid === false && toast.error("Please fill all fields")
                  }
                >
                  {isPending ? (
                    <>
                      Adding Review
                      <Loader className="ml-1 h-5 w-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Post Review <SendHorizontal className="ml-2" />
                    </>
                  )}
                </ButtonLink>
              </form>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
