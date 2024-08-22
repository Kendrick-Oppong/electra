"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  addPaymentMode,
  getAllPaymentMode,
} from "@/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CreditCard, Banknote } from "lucide-react";

const PaymentMode = () => {
  const dispatch = useAppDispatch();
  const paymentMode = useAppSelector(getAllPaymentMode);

  return (
    <div>
      <ToggleGroup
        defaultChecked
        defaultValue={paymentMode || "Cash"}
        onValueChange={(value) => dispatch(addPaymentMode(value))}
        variant="outline"
        size="lg"
        type="single"
      >
        <ToggleGroupItem value="Cash" aria-label="Toggle bold">
          <Banknote size={30} className="mr-2" />
          Cash
        </ToggleGroupItem>
        <ToggleGroupItem value="Card" aria-label="Toggle italic">
          <CreditCard size={30} className="mr-2" />
          Card
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default PaymentMode;
