"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useTheme } from "next-themes";
import { TransitionLink } from "@/lib/TransitionLink";
import Link from "next/link";
import useCurrencyStore from "@/store/useCurrencyStore";
import CustomDropdown from "./CustomDropdown";
import CartButton from "./CartButton";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { currency, setCurrency } = useCurrencyStore();

  useEffect(() => {
    setMounted(true);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-20 border-b border-gray-200 dark:border-stone-800 backdrop-blur-xl text-black dark:text-white transition-[padding,background] duration-300 ${
          isScrolled
            ? "py-3 dark:bg-blackTwo/60 bg-whiteTwo/70"
            : "py-6 dark:bg-transparent bg-whiteTwo/40"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <div className="relative w-[160px] h-[40px]">
              {/* Preload both logos and just toggle opacity */}
              <Image
                src="/logo1-light.png"
                alt="Turbo Shop Logo Light"
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${
                  theme === "dark" ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src="/logo1-dark.png"
                alt="Turbo Shop Logo Dark"
                fill
                priority
                className={`object-contain absolute inset-0 transition-opacity duration-300 ${
                  theme === "dark" ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-8 font-medium xl:text-lg 2xl:text-xl">
            <TransitionLink href="/">HOME</TransitionLink>
            <TransitionLink href="/universal-products">
              UNIVERSAL PRODUCTS
            </TransitionLink>
            <TransitionLink href="/about">ABOUT US</TransitionLink>
            <TransitionLink href="/contact-us">CONTACT US</TransitionLink>
          </nav>

          {/* Right Side */}
          <div className="hidden xl:flex items-center space-x-4">
            <TransitionLink href="/my-cart">
              <CartButton />
            </TransitionLink>
            <CustomDropdown
              handleCurrencyChange={handleCurrencyChange}
              currency={currency}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
            <ModeToggle />
            <Link href="tel:403-993-6742">
              <span className="pl-4 text-gray-900 dark:text-whiteOne font-medium">
                403-993-6742
              </span>
            </Link>
          </div>

        <button
  onClick={() => setIsSidebarOpen(true)}
  aria-label="Open mobile menu"
  className="xl:hidden flex items-center gap-2 text-black dark:text-white hover:text-primary dark:hover:text-primaryhover transition"
>
  <Menu className="h-6 w-6" />
</button>



        </div>
      </header>

      {/* MobileMenu */}
      <MobileMenu
        handleCurrencyChange={handleCurrencyChange}
        currency={currency}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Header;
