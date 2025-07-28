"use client";

import React, { useState } from "react";
import OrderSummaryHeader from "./OrderSummaryHeader";
import CouponSection from "./CouponSection";
import PaymentMethods from "./PaymentMethods";

const OrderSummary = () => {
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleCouponApply = () => {
    if (couponCode === "TURBOSHOP10") {
      setIsCouponApplied(true);
    } else {
      alert("Invalid coupon code.");
    }
  };

  return (
    <div className="w-full md:w-4/12 border border-gray-200 dark:border-stone-800 p-4 rounded bg-whiteOne dark:bg-blackOne dark:shadow-sm shadow-sm h-fit">
      <OrderSummaryHeader isCouponApplied={isCouponApplied} />
      <CouponSection
        isCouponApplied={isCouponApplied}
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        handleCouponApply={handleCouponApply}
      />
      <PaymentMethods total="1.00" />
    </div>
  );
};

export default OrderSummary;
