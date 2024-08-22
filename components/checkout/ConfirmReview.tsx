"use client";
import {
  getAllPaymentMode,
  getAllShippingFormData,
} from "@/redux/features/checkoutSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const ConfirmReview = () => {
  const { city, firstName, lastName, phoneNumber, region } = useAppSelector(
    getAllShippingFormData,
  );
  const paymentMode = useAppSelector(getAllPaymentMode);

  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Shipping Address</h1>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>Region: {region}</p>
        <p>City: {city}</p>
        <p>Phone Number: {phoneNumber}</p>
      </div>
      <div className="space-y-4 mt-4">
        <h1 className="text-xl font-semibold">Payment Mode</h1>
        <p> Mode: {paymentMode}</p>
      </div>
    </div>
  );
};

export default ConfirmReview;
