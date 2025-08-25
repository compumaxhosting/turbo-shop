"use client"

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import ScrollToTop from "@/components/extras/ScrollToTop";
import UniversalProducts from "@/components/universal-products/UniversalProducts";
import ShippingFeeToast from "@/components/extras/ShippingFeeToast";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import { useEffect } from "react";


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
    <div className="bg-whiteOne dark:bg-blackOne">
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <ShippingFeeToast heading="SHIPPING CHARGES FOR REPAIR" text="ADDITIONAL $200 FOR SHIPPING FOR PRODUCT REPAIRS." />
      <UniversalProducts />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Page;
