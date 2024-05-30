import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ProductRating } from "@/components/shared";
import {ratingOptions} from "@/constants"
import { Label } from "@/components/ui/label";

const StarRatingRadioGroup = () => {
  return (
    <RadioGroup defaultValue="4-and-above">
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