"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { colorOptions } from "@/constants";
import { Label } from "@/components/ui/label";
import { useRouter, usePathname,useSearchParams } from "next/navigation";
const ColorsRatingRadioGroup = () => {
 const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleColorChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('color', value);
    router.push(`${pathname}?${params.toString()}`);
  };


  return (
    <RadioGroup
      defaultValue="black"
      onValueChange={(e) => handleColorChange(e)}
    >
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
