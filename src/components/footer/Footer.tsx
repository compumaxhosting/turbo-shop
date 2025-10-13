"use client";

import Image from "next/image";
import Link from "next/link";
import QuickLinksSVG from "./QuickLinksSVG";
import { FaXTwitter } from "react-icons/fa6";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="dark:bg-blackOne bg-whiteOne dark:text-white text-blackOne border-t border-gray-200 dark:border-stone-800">
      <div>
        <div className="container mx-auto py-10 md:py-16 pb-6 sm:pb-12 px-6 sm:px-2 md:px-2 lg:px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <div className="relative max-w-[200px]">
                {theme === "dark" ? (
                  <Image
                    src="/logo1-dark.png"
                    alt="Turbo Shop Logo Dark"
                    width={220}
                    height={50}
                    className="w-full max-w-2xl"
                  />
                ) : (
                  <Image
                    src="/logo1-light.png"
                    alt="Turbo Shop Logo Light"
                    width={220}
                    height={50}
                    className="w-full max-w-2xl"
                  />
                )}
              </div>
              <p className="dark:text-white text-blackOne mt-4 text-sm md:text-lg font-sans font-normal">
                We focus exclusively on rebuilding, replacing, and upgrading
                turbochargers.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-2xl font-semibold mb-6">QUICK LINKS</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/universal-products"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    UNIVERSAL PRODUCT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-2xl font-semibold mb-6">FOLLOW US</p>
              <p className="dark:text-white text-blackOne text-sm md:text-lg font-normal font-sans">
                Stay connected with us on social media for the latest updates
                and offers.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="#"
                  aria-label="Follow us on Twitter"
                  title="Twitter"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <FaXTwitter className="dark:text-white text-whiteOne text-2xl" />
                </Link>
                <Link
                  href="https://www.facebook.com/Turboshoptf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  title="Facebook"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <Facebook className="dark:text-white text-whiteOne text-lg" />
                </Link>
                <Link
                  href="https://www.instagram.com/turboshoptf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  title="Instagram"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <Instagram className="dark:text-white text-whiteOne text-lg" />
                </Link>
                <Link
                  href="#"
                  aria-label="Subscribe to our YouTube channel"
                  title="YouTube"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <Youtube className="dark:text-white text-whiteOne text-lg" />
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-2xl font-semibold mb-6">CONTACT US</p>
              <Link
                href="tel:403-993-6742"
                aria-label="Call us at 403-993-6742"
              >
                <p className="dark:text-white text-blackOne md:text-base">
                  <span className="font-semibold">CALL US :</span> <br />
                  403-993-6742
                </p>
              </Link>
              <Link
                href="mailto:turboshopcanada1@gmail.com"
                aria-label="Email us at turboshopcanada1@gmail.com"
              >
                <p className="dark:text-white text-blackOne mt-2 md:text-base">
                  <span className="font-semibold">EMAIL US :</span> <br />
                  turboshopcanada1@gmail.com
                </p>
              </Link>
              <p className="dark:text-white text-blackOne mt-2 md:text-base">
                <span className="font-semibold">ADDRESS :</span> <br />
                Calgary, Alberta.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="dark:bg-blackTwo bg-whiteTwo py-6 px-14 text-center dark:text-white text-blackOne text-sm md:text-base border-t border-gray-200 dark:border-stone-800">
          <p className="font-sans font-normal">
            <span className="font-bold dark:text-white text-blackOne">
              Turboshop.ca
            </span>{" "}
            © All rights reserved Copyrights 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
