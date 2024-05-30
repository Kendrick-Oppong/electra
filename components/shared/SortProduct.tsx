import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const sortingOptions = [
  { value: "default", label: "Default" },
  { value: "name-asc", label: "Name (A - Z)" },
  { value: "name-desc", label: "Name (Z - A)" },
  { value: "price-asc", label: "Price (Low > High)" },
  { value: "price-desc", label: "Price (High > Low)" },
  { value: "rating-high", label: "Rating (Highest)" },
  { value: "rating-low", label: "Rating (Lowest)" },
];

const SortProduct = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder="Default"
            className="text-black dark:text-white"
          />
        </SelectTrigger>
        <SelectContent className="border-gray">
          {sortingOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <p className="text-black dark:text-white">{option.label}</p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortProduct;
