import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { z } from "zod";
import { ShippingFormSchema } from "@/validators/formSchema";

type ShippingFormTypes = z.infer<typeof ShippingFormSchema>;

interface CheckOutFormProps {
  formData: ShippingFormTypes;
  paymentMode: string;
}

const initialState: CheckOutFormProps = {
  formData: {
    firstName: "",
    lastName: "",
    region: "",
    city: "",
    phoneNumber: "",
  },
  paymentMode: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addShippingForm: (state, action: PayloadAction<ShippingFormTypes>) => {
      state.formData = action.payload;
    },
    addPaymentMode: (state, action: PayloadAction<string>) => {
      state.paymentMode = action.payload;
    },
  },
});

export const { addShippingForm, addPaymentMode } = checkoutSlice.actions;

export const getAllShippingFormData = (state: RootState) =>
  state.checkout.formData;

export const getPaymentMode = (state: RootState) => state.checkout.paymentMode;

export default checkoutSlice.reducer;
