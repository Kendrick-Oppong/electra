"use client"
import { useRouter, usePathname,useSearchParams } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
 
const sortingOptions = [
  // { value: "name-asc", label: "Default" },
  { value: "name-asc", label: "Name (A - Z)" },
  { value: "name-desc", label: "Name (Z - A)" },
  { value: "price-asc", label: "Price (Low > High)" },
  { value: "price-desc", label: "Price (High > Low)" },
  { value: "rating-highest", label: "Rating (Highest)" },
  { value: "rating-lowest", label: "Rating (Lowest)" },
];

const SortProduct = () => {
 const router = useRouter();
 const pathname = usePathname();
 const searchParams = useSearchParams();

 const handleSortChange = (value: string) => {
   const params = new URLSearchParams(searchParams);
   params.set("sort", value);
   router.push(`${pathname}?${params.toString()}`);
 };


  return (

    
  <div className="my-8 flex gap-6 flex-wrap justify-between font-semibold">
    <p>
      Showing 1 - <span className="text-destructive">12</span> of{" "}
      <span>12</span> items
    </p>
    <div className="flex items-center gap-2">
      <p>Sort By:</p>
      <div>
      <Select defaultValue="name-asc" onValueChange={(e)=>handleSortChange(e)}>
        <SelectTrigger className="w-[200px] border-gray   focus-visible:border-primary rounded-md">
          <SelectValue
            placeholder="Default (A - Z)"
            className="text-black dark:text-white"
          />
        </SelectTrigger>
        <SelectContent className="border-gray rounded-md">
          {sortingOptions.map((option) => (
            <SelectItem key={option.label} value={option.value}>
              <p className="text-black dark:text-white">{option.label}</p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    </div>
  </div>
   
  );
};

export default SortProduct;

