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
    <div >
      <Select defaultValue="name-asc" onValueChange={(e)=>handleSortChange(e)}>
        <SelectTrigger className="w-[200px] border-gray   focus-visible:border-primary rounded-lg">
          <SelectValue
            placeholder="Default (A - Z)"
            className="text-black dark:text-white"
          />
        </SelectTrigger>
        <SelectContent className="border-gray rounded-lg">
          {sortingOptions.map((option) => (
            <SelectItem key={option.label} value={option.value}>
              <p className="text-black dark:text-white">{option.label}</p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortProduct;
