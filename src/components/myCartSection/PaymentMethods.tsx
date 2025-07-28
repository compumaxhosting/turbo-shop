"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

interface PaymentMethodsProps {
  total: string;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ total }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Pay with PayPal</h3>
      <PayPalButtons
        style={{ layout: "vertical", shape: "rect" }}
        createOrder={(data, actions) => {
          return actions.order!.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: total,
                  currency_code: "CAD",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order!.capture();
          const payerName = details?.payer?.name?.given_name || "Customer";

          alert(`Transaction completed successfully by ${payerName}`);
        }}
        onError={(err) => {
          console.error("PayPal Checkout Error:", err);
          alert("There was an issue with the payment. Please try again.");
        }}
      />
    </div>
  );
};

export default PaymentMethods;
