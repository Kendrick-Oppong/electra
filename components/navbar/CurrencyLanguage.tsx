import German from "@/public/germany-svgrepo-com.svg"
import UK from "@/public/united-kingdom-svgrepo-com.svg"
import Image from "next/image"
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
    <Select >
        <SelectTrigger className="w-[180px] text-base">
          <SelectValue placeholder="English" className="text-base" />
        </SelectTrigger>
        <SelectContent >
          <SelectItem value="en" className="text-base">
           <Image src={UK} className="inline-flex mr-2" alt=""/> English
          </SelectItem>
          <SelectItem value="de" className="text-base">
            <Image src={German} className="inline-flex mr-2" alt=""/> German 
          </SelectItem>
        </SelectContent>

        <Select>
          <SelectTrigger className="w-[180px] text-base">
            <SelectValue placeholder="US Dollar" className="text-base"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EUR"  className="text-base">
              <Euro className="inline-flex mr-2" /> Euro
            </SelectItem>
            <SelectItem value="GBP"  className="text-base">
              <PoundSterling className="inline-flex mr-2" /> Pound Sterling
            </SelectItem>
            <SelectItem value="USD"  className="text-base">
              <DollarSign  className="inline-flex mr-2"/> US Dollar
            </SelectItem>
          </SelectContent>
        </Select>
      </Select>
  );
};

export default CurrencyLanguage;
