"use client";
import { useForm } from "react-hook-form";
import group from "@/assets/home/testimonial/Group.svg";
import Image from "next/image";

const GetStarted = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-custom-bg text-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10 flex flex-col items-center gap-4 ">
      <Image src={group} alt="group" />
      <h1 className="text-2xl md:text-3xl  font-semibold">Get Started</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-full"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            className="bg-white text-gray-300 px-6 py-3 border border-transparent rounded-lg"
            type="email"
            placeholder="Enter your Email"
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
        <div className="flex flex-col gap-3">
          <label htmlFor="text">Message</label>
          <input
            className="bg-white text-gray-300 px-6 py-3 border border-transparent rounded-lg"
            type="text"
            placeholder="What do you say?"
            {...register("mess", { required: true })}
          />
          {errors.mess && (
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
                {errors.mess.message || "Email is required"}
              </p>
            </div>
          )}
        </div>
        <button
          className={`w-2/3 md:w-full mx-auto block px-8 py-2 rounded-lg bg-custom-text text-white text-lg font-medium hover:opacity-90 ${
            isSubmitting
              ? "transition opacity-50 cursor-not-allowed"
              : "transition cursor-pointer"
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
