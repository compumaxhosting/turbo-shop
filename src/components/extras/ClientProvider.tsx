"use client";

import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ThemeProvider } from "@/components/extras/ThemeProvider";

interface Props {
  children: React.ReactNode;
}

const ClientProviders = ({ children }: Props) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AXdTfqMXQPzN2FKJ2BWQUHqwSjgwh9gPgPIWGZQqHAAvPtNRf5TgcD3unZUw3W1YhEcOxnmuBsMqPxyY", 
        currency: "CAD",
      }}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </PayPalScriptProvider>
  );
};

export default ClientProviders;
