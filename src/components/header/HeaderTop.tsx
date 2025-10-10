"use client";

// src/components/HeaderTop.tsx
import React, { useState, useEffect } from "react";
import { IoChatbubbleSharp } from "react-icons/io5";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

const HeaderTop: React.FC = () => {
  const [mounted, setMounted] = useState(false); // To track if the component has mounted

  // Run this effect once on mount to change the mounted state to true
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the component when it's mounted
  if (!mounted) {
    return null; // Optionally, you can return a loading spinner or a placeholder here
  }

  return (
    <header className="bg-primary py-3 font-chakra">
      <div className="container mx-auto flex items-center justify-center gap-6 sm:gap-12 px-0">
        <Link href="/contact-us">
          <div className="flex items-center gap-2 cursor-pointer">
            <IoChatbubbleSharp className="text-white text-xl" />
            <h1 className="text-white text-md md:text-lg font-semibold">GET A QUOTE</h1>
          </div>
        </Link>
        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <Link href="https://twitter.com" target="_blank" aria-label="Visit our Twitter page">
            <FaXTwitter className="dark:text-white text-white text-lg cursor-pointer" />
          </Link>
          <Link href="https://www.facebook.com/Turboshoptf" target="_blank" aria-label="Visit our Facebook page">
            <FaFacebookF className="dark:text-white text-white text-lg cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/turboshoptf" target="_blank" aria-label="Visit our Instagram page">
            <FaInstagram className="dark:text-white text-white text-lg cursor-pointer" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" aria-label="Visit our YouTube channel">
            <FaYoutube className="dark:text-white text-white text-lg cursor-pointer" />
          </Link>
        </div>

      </div>
    </header>
  );
};

export default HeaderTop;
