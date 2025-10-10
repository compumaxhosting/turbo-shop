"use client";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className="bg-primary py-3 font-chakra"
      role="banner"
      aria-label="Top navigation bar"
    >
      <div className="container mx-auto flex items-center justify-center gap-6 sm:gap-12 px-0">
        {/* Get a Quote Button */}
        <Link
          href="/contact-us"
          aria-label="Get a quote or contact us"
          className="flex items-center gap-2 cursor-pointer group"
        >
          <IoChatbubbleSharp
            className="text-white text-xl group-hover:scale-110 transition-transform"
            aria-hidden="true"
          />
          <span className="text-white text-md md:text-lg font-semibold">
            GET A QUOTE
          </span>
        </Link>

        {/* Social Media Icons */}
        <nav
          className="flex items-center gap-4"
          aria-label="Social media links"
        >
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
            className="p-2 rounded-lg bg-primaryhover dark:bg-primary hover:bg-primary/80 transition"
          >
            <FaXTwitter className="text-white text-lg" aria-hidden="true" />
          </Link>

          <Link
            href="https://www.facebook.com/Turboshoptf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="p-2 rounded-lg bg-primaryhover dark:bg-primary hover:bg-primary/80 transition"
          >
            <FaFacebookF className="text-white text-lg" aria-hidden="true" />
          </Link>

          <Link
            href="https://www.instagram.com/turboshoptf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
            className="p-2 rounded-lg bg-primaryhover dark:bg-primary hover:bg-primary/80 transition"
          >
            <FaInstagram className="text-white text-lg" aria-hidden="true" />
          </Link>

          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            className="p-2 rounded-lg bg-primaryhover dark:bg-primary hover:bg-primary/80 transition"
          >
            <FaYoutube className="text-white text-lg" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderTop;
