"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import personImg from "@/assets/home/hero/personImg.svg";

const QuoteForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`/api/contact`, data);
      toast.success(res.data.message);
      reset();

      if (onSuccess) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.log("error occued hero ", error);
      toast.error("failed to send message");
    }
  };

  return (
    <div className="relative">
      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10">
        <h2 className="text-custom-bg text-xl md:text-3xl font-bold mb-6">
          Quick <span className="text-custom-text"> Quote </span>
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center "
        >
          <div className="mb-4 w-full md:w-2/3">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <div className="flex items-center gap-1.5 mt-1 px-2 py-1 bg-red-50 border-l-2 border-red-500 rounded-r-md">
                <svg
                  className="w-3.5 h-3.5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-700 text-[11px] font-medium leading-none">
                  Name is required
                </p>
              </div>
            )}
          </div>

          <div className="mb-4 w-full md:w-2/3">
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full p-3 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <svg
                  className="w-4 h-4 text-red-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-800 text-xs font-medium leading-none">
                  Company name is required
                </p>
              </div>
            )}
          </div>

          <div className="mb-4 w-full md:w-2/3">
            <select
              className="w-full p-3 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
              {...register("companyTurnover", {
                required: "Please select a turnover",
              })}
            >
              <option value="" disabled>
                Select Company Turnover
              </option>
              <option value="under_50k">Under £50,000</option>
              <option value="50k_150k">£50,000 - £150,000</option>
              <option value="150k_500k">£150,000 - £500,000</option>
              <option value="over_500k">Over £500,000</option>
            </select>
            {errors.companyTurnover && (
              <div className="mt-2 flex items-start gap-2 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <svg
                  className="w-4 h-4 text-red-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-red-800 text-xs font-medium leading-tight">
                  {errors.companyTurnover.message}
                </p>
              </div>
            )}
          </div>

          <div className="mb-6 w-full md:w-2/3">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <svg
                  className="w-4 h-4 text-red-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p className="text-red-800 text-xs font-semibold tracking-wide">
                  {errors.email.message || "Email is required"}
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={
              isSubmitting
                ? "w-2/3 md:w-1/3 mx-auto block px-8 py-2 rounded-sm bg-custom-bg text-white text-lg font-medium hover:opacity-90 transition opacity-50 cursor-not-allowed"
                : "w-2/3 md:w-1/3 mx-auto block px-8 py-2 rounded-sm bg-custom-bg text-white text-lg font-medium hover:opacity-90 transition cursor-pointer"
            }
          >
            {isSubmitting ? "Sending" : "Submit"}
          </button>
        </form>
      </div>

      {/* Person Image */}
      <img
        src={personImg.src}
        alt="Person illustration"
        className="hidden lg:block absolute z-10 -right-16 bottom-0 w-40 xl:w-48 h-2/3"
      />
    </div>
  );
};

export default QuoteForm;
