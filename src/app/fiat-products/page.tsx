"use client";

import ProductsSection from "@/components/products-listing/ProductsSection";
import React, { useEffect } from "react";
import { fiatProductsData } from "@/data/products-data/fiatProductsData";
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BreadcrumbSection from "@/components/products-listing/BreadcrumbSection";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import ScrollToTop from "@/components/extras/ScrollToTop";
import ShippingFeeToast from "@/components/extras/ShippingFeeToast";

const Page: React.FC = () => {
  useEffect(() => {
    // Save the current scroll position before starting the animation
    const body = document.querySelector("body");
    const scrollPosition = window.scrollY;

    // Add transition animation class
    body?.classList.add("page-transition");

    // Remove the transition class after the animation completes (500ms)
    const timer = setTimeout(() => {
      body?.classList.remove("page-transition");
      window.scrollTo(0, scrollPosition); // Restore the scroll position
    }, 500); // Match this delay with the transition duration

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <ShippingFeeToast
        heading="SHIPPING CHARGES FOR REPAIR"
        text="ADDITIONAL $200 FOR SHIPPING FOR PRODUCT REPAIRS."
      />
      <BreadcrumbSection
        title="SHOP FIAT PRODUCTS"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "fiat-products" }]}
      />
      <ProductsSection productsData={fiatProductsData} />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Page;
