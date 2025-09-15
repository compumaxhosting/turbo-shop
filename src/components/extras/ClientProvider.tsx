"use client";

import React from "react";
import { ThemeProvider } from "@/components/extras/ThemeProvider";

interface Props {
  children: React.ReactNode;
}

const ClientProviders = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ClientProviders;
