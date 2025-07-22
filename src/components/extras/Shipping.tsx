"use client";

import React from "react";
import { TruckIcon } from "lucide-react";

const Shipping: React.FC = () => {
  return (
    <section className="bg-white dark:bg-blackOne text-blackOne dark:text-white border border-gray-200 dark:border-stone-800 rounded-2xl shadow-md p-6 sm:p-8 max-w-3xl mx-auto mt-10 mb-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="bg-primary text-white p-3 rounded-full shadow-lg">
            <TruckIcon className="h-6 w-6" />
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
            Shipping & Repair Notice
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
            For all product repairs, an additional{" "}
            <span className="font-semibold text-black dark:text-white">
              $200 shipping fee
            </span>{" "}
            is required. This fee covers:
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li>Shipping the product to our repair facility</li>
            <li>Return shipping back to your location</li>
            <li>Secure and insured handling of your item</li>
          </ul>

          <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            This fee is in addition to any labor or part replacement charges
            that may apply. We ensure safe delivery and prompt service
            throughout the repair process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
