// app/cart/page.tsx

import React from "react";
import MyCart from "@/components/myCartSection/MyCart"; // Adjust the path if necessary
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/extras/ScrollToTop";
import Footer from "@/components/footer/Footer";
import ShippingFeeToast from "@/components/extras/ShippingFeeToast";

const MyCartPage: React.FC = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <MyCart />
      <ScrollToTop />
      <ShippingFeeToast
        heading="SHIPPING CHARGES FOR REPAIR"
        text="An additional $200 shipping fee applies for all product repairs."
      />
      <Footer />
    </>
  );
};

export default MyCartPage;
