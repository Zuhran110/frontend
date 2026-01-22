"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import formImg from "@/assets/contactUs/formImg.svg";
import Image from "next/image";

const Formy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`/api/contacttwo`, data);
      toast.success(res.data.message);
      console.log(data);
      reset();

      await new Promise((res) => setTimeout(res, 2000));
    } catch (error) {
      console.log("error occurred when trying to submiting form", error);
      toast.error("Failed submit Form");
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="hidden md:block md:w-1/2">
        <Image
          src={formImg}
          alt="Contact form illustration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900">
          Message Us
        </h1>
        <p className="mb-6 text-gray-600 text-sm">We'll get back to you within 24 hours.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              {...register("fullname", { required: true })}
              placeholder="*Enter Full Name:"
              className="border border-gray-300 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.fullname && (
              <p className="text-red-600 text-xs mt-1">Enter your name</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <input
              type="text"
              {...register("companyName", { required: true })}
              placeholder="*Enter Company Name:"
              className="border border-gray-300 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.companyName && (
              <p className="text-red-600 text-xs mt-1">Enter your company name</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              placeholder="*Email:"
              className="border border-gray-300 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">Enter a valid email</p>
            )}
          </div>

          {/* Service Selection */}
          <div>
            <select
              {...register("serviceType", { required: true })}
              className="border border-gray-300 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select Service:
              </option>
              <option value="tax">Tax</option>
              <option value="counseling">Counseling</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-600 text-xs mt-1">Select a service</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              {...register("message", { required: true })}
              placeholder="Message:"
              className="border border-gray-300 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
            />
            {errors.message && (
              <p className="text-red-600 text-xs mt-1">Message is required</p>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-slate-800 text-white px-12 py-3 rounded-md hover:bg-slate-700 transition duration-300 text-sm font-medium ${
                isSubmitting ? "cursor-not-allowed opacity-70" : "cursor-pointer"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Formy;
