"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ProductRating } from "@/components/shared";
import {ratingOptions} from "@/constants"
import { Label } from "@/components/ui/label";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const StarRatingRadioGroup = () => {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const handleRatingChange = (value: string) => {
     const params = new URLSearchParams(searchParams);
     params.set("rating", value);
     router.push(`${pathname}?${params.toString()}`);
   };

  return (
    <RadioGroup defaultValue="4-and-above" onValueChange={(e) => handleRatingChange(e)}>
              {ratingOptions.map((option) => (
                <div key={option.value} className="flex items-center gap-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <ProductRating className="!mx-0" rating={option.rating} />
                  <Label className="text-base" htmlFor={option.value}>
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
  );
};

export default StarRatingRadioGroup