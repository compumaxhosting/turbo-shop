"use client";

import ProductsSection from "@/components/products-listing/ProductsSection";
import React from "react";
import { dodgeProductsData } from "@/data/products-data/dodgeProductsData";
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BreadcrumbSection from "@/components/products-listing/BreadcrumbSection";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import ScrollToTop from "@/components/extras/ScrollToTop";
import ShippingFeeToast from "@/components/extras/ShippingFeeToast";

const Page = () => {
  

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
        title="SHOP Dodge/Chrysler/Eagle/Jeep PRODUCTS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "dodge-products" },
        ]}
      />
      <ProductsSection productsData={dodgeProductsData} />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Page;
