"use client";
import React from "react";
import Link from "next/link";
import Popup from "reactjs-popup";
import QuoteForm from "@/component/shared/form/QuoteForm";

const Contacts = ({ data }) => {
  const { heading, description } = data;
  return (
    <div className="bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-3 md:px-16 xl:px-44 py-8 md:py-16 overflow-hidden">
      <section className="bg-custom-bg px-3 md:px-16 xl:px-44 py-12 md:py-16 border border-transparent rounded-2xl">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-white via-5% to-custom-text mb-4">
            {heading}
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
            <Popup
              trigger={
                <button
                  type="button"
                  className="cursor-pointer navbar-btn bg-white text-custom-bg px-8 py-2 font-semibold border-2 rounded-full border-transparent justify-center"
                >
                  Get a Quote
                </button>
              }
              modal
              nested
              overlayStyle={{
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {(close) => (
                <div className="relative bg-white w-[95vw] max-w-lg mx-auto rounded-2xl shadow-2xl p-6 md:p-10 transform transition-all animate-in fade-in zoom-in duration-300">
                  {/* Close Button */}
                  <button
                    onClick={close}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  {/* Heading */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                      Get a Quick <span className="text-custom-bg">Quote</span>
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Tell us about your project and we’ll get back to you
                      within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="mt-4">
                    <QuoteForm close={close} />
                  </div>
                </div>
              )}
            </Popup>
            <Link
              href="/"
              className="px-8 py-2 border border-white text-white rounded-full  font-medium hover:bg-white hover:text-custom-bg transition-colors"
            >
              {"Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
