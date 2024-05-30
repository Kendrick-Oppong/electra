import German from "@/public/germany-svgrepo-com.svg";
import UK from "@/public/united-kingdom-svgrepo-com.svg";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Euro, PoundSterling, DollarSign } from "lucide-react";

const CurrencyLanguage = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-base">
        <SelectValue
          placeholder="English"
          className="text-base text-black dark:text-white"
        />
      </SelectTrigger>
      <SelectContent className="border-gray">
        <SelectItem value="en" className="text-base">
          <p className="text-black dark:text-white">
            <Image src={UK} className="inline-flex mr-2" alt="" /> English
          </p>
        </SelectItem>
        <SelectItem value="de" className="text-base">
          <p className="text-black dark:text-white">
            <Image src={German} className="inline-flex mr-2" alt="" /> German
          </p>
        </SelectItem>
      </SelectContent>

      <Select>
        <SelectTrigger className="w-[180px] text-base">
          <SelectValue
            placeholder="US Dollar"
            className="text-base text-black dark:text-white"
          />
        </SelectTrigger>
        <SelectContent className="border-gray">
          <SelectItem value="EUR" className="text-base ">
            <p className="text-black dark:text-white">
              <Euro className="inline-flex mr-2" /> Euro
            </p>
          </SelectItem>
          <SelectItem value="GBP" className="text-base">
            <p className="text-black dark:text-white">
              <PoundSterling className="inline-flex mr-2" /> Pound Sterling
            </p>
          </SelectItem>
          <SelectItem value="USD" className="text-base">
            <p className="text-black dark:text-white">
              <DollarSign className="inline-flex mr-2" /> US Dollar
            </p>
          </SelectItem>
        </SelectContent>
      </Select>
    </Select>
  );
};

export default CurrencyLanguage;
