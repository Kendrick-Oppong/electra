"use client";
import {
  getAllPaymentMode,
  getAllShippingFormData,
} from "@/redux/features/checkoutSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const ConfirmReview = () => {
  const { city, firstName, lastName, phoneNumber, region, email } =
    useAppSelector(getAllShippingFormData);
  const paymentMode = useAppSelector(getAllPaymentMode);

  return (
    <div>
      <div className="space-y-4 [&_p]:ml-3">
        <h1 className="text-center text-xl font-semibold text-primary">
          Summary
        </h1>
        <h1 className="text-xl font-semibold bg-secondary p-2 rounded-sm ">Shipping Address</h1>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>Email: {email}</p>
        <p>Region: {region}</p>
        <p>City: {city}</p>
        <p>Phone Number: {phoneNumber}</p>
      </div>
      <div className="mt-4 space-y-4 [&_p]:ml-3">
        <h1 className="text-xl font-semibold bg-secondary p-2 rounded-sm ">Payment Mode</h1>
        <p> Mode: {(paymentMode === "Cash" || paymentMode === "") ? "Cash - (On Delivery)" : paymentMode}</p>
      </div>
    </div>
  );
};

export default ConfirmReview;
