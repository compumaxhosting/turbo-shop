"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdPhone } from "react-icons/md";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    product: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.product ||
      !formData.details
    ) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Your inquiry has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          product: "",
          details: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Error connecting to server.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Section Heading */}
      <div className="text-left mb-6 px-4">
        {/* Changed h4 → h2 to maintain logical heading hierarchy */}
        <h2 className="text-3xl md:text-4xl font-bold text-blackOne dark:text-whiteTwo mb-4">
          Get in Touch
        </h2>
        <div className="flex flex-wrap items-center justify-left gap-2 text-base sm:text-lg font-medium text-primary dark:text-whiteTwo">
          <span>Call us at</span>
          <MdPhone className="w-5 h-5 text-primary" aria-hidden="true" />
          <Link
            href="tel:4039936742"
            className="hover:underline text-#9c451b dark:text-#d46a27"
            aria-label="Call us at 403-993-6742"
          >
            403-993-6742
          </Link>
          <span>for help!</span>
        </div>
      </div>

      {/* Contact Form */}
      <form
        className="flex flex-col gap-4 px-4"
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Full Name */}
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="fullName" className="mb-1 text-lg font-semibold">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="border-b text-base border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="email" className="mb-1 text-lg font-semibold">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="border-b text-base border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Phone */}
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="phone" className="mb-1 text-lg font-semibold">
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="border-b text-base border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
              required
            />
          </div>

          {/* Product */}
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="product" className="mb-1 text-lg font-semibold">
              Product of Interest <span className="text-primary">*</span>
            </label>
            <select
              id="product"
              value={formData.product}
              onChange={handleChange}
              className="border-b text-base border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
              required
            >
              <option value="" className="dark:bg-blackOne">
                Select a product
              </option>
              <option className="dark:bg-blackOne">Turbochargers</option>
              <option className="dark:bg-blackOne">Turbo Parts</option>
              <option className="dark:bg-blackOne">
                Custom Turbo Solution
              </option>
              <option className="dark:bg-blackOne">
                Turbo Repair with Shipping
              </option>
              <option className="dark:bg-blackOne">Others</option>
            </select>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col w-full">
          <label htmlFor="details" className="mb-1 text-lg font-semibold">
            Details or Inquiry <span className="text-primary">*</span>
          </label>
          <textarea
            id="details"
            rows={4}
            value={formData.details}
            onChange={handleChange}
            placeholder="Provide details about your inquiry or order"
            className="border-b text-base border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
            required
          />
        </div>

        {/* Status messages */}
        {error && (
          <p className="text-red-500" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-500" role="status">
            {success}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary bg-primary text-whiteOne py-4 px-12 hover:bg-opacity-90 w-fit text-lg font-semibold"
        >
          {loading ? "Sending..." : "SUBMIT FORM"}
        </button>
      </form>
    </>
  );
};

export default FormComponent;
