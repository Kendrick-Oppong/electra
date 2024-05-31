import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { colorOptions } from "@/constants";
import { Label } from "@/components/ui/label";

const ColorsRatingRadioGroup = () => {
  return (
    <RadioGroup defaultValue="black">
      <h2 className="text-primary font-semibold">Filter By Color</h2>
      {colorOptions.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label className="text-base" htmlFor={option.value}>
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default ColorsRatingRadioGroup;
