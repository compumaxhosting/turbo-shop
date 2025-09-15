"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Parent-child animation for text (staggered, avoids forced reflow)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.75,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative hero-img bg-whiteOne dark:bg-blackOne text-blackTwo dark:text-whiteOne px-6 md:px-16 py-20 pb-0 lg:py-24 2xl:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full">
        <Image
          src="/tire-img.png"
          alt="Turbo Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-bottom opacity-20"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl 2xl:max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-10 z-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-4 lg:gap-20">
          <motion.h1
            className="text-4xl md:text-5xl 2xl:text-6xl font-bold uppercase leading-tight"
            style={{ lineHeight: "1.25" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {"New Turbo & Turbo Rebuild Services".split("").map((char, i) => (
              <motion.span key={i} variants={item}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg text-stone-700 dark:text-gray-300 mt-4"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            We specialize in turbocharger rebuilding, replacement, upgrades, and
            new turbochargers.
          </motion.p>

          {/* Bottom Paragraphs */}
          <div className="mt-8 flex flex-wrap gap-6 text-xl font-medium">
            {[
              "Turbo Rebuild Services",
              "Turbocharger Components",
              "Turbo For Sales",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="w-[100%] sm:w-[26%] border-t-2 border-orange-500 pt-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }} // changed from 0.5 to 0
                transition={{ delay: 1.7 + i * 0.2, duration: 0.3 }}
              >
                {text.split("<br />").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < text.split("<br />").length - 1 && <br />}
                  </span>
                ))}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="w-full flex-1 flex justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="w-full max-w-2xl flex justify-center items-center"
          >
            <Image
              src="/turbo-charger-hero-section.png"
              alt="Turbo Image"
              width={410}
              height={410}
              className="w-[300px] h-[300px] md:w-[410px] md:h-[410px] object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
