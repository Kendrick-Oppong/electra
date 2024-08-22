"use client"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CreditCard, Banknote } from "lucide-react";

const PaymentMode = () => {
  return (
    <div>
      <ToggleGroup variant="outline" size="lg" type="single">
        <ToggleGroupItem value="cash" aria-label="Toggle bold">
          <Banknote size={30} className="mr-2" />
          Cash
        </ToggleGroupItem>
        <ToggleGroupItem value="card" aria-label="Toggle italic">
          <CreditCard size={30} className="mr-2" />
          Card
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export default PaymentMode