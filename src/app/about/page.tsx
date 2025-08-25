"use client";

import AboutSection from "@/components/about/AboutSection";
import ScrollToTop from "@/components/extras/ScrollToTop";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import React, { useEffect } from "react";

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
    <div className="bg-whiteOne dark:bg-blackTwo">
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <AboutSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Page;
