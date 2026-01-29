"use client";

import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import QuoteForm from "../form/QuoteForm";

const ContactUsBtn = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button
        type="button"
        className="cursor-pointer bg-custom-bg hover:opacity-90 text-white px-8 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md active:scale-95"
      >
        Get a Quote
      </button>
    );
  }

  return (
    <Popup
      trigger={
        <button
          type="button"
          className="cursor-pointer bg-custom-bg hover:opacity-90 text-white px-8 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md active:scale-95"
        >
          Get a Quote
        </button>
      }
      modal
      nested
      // This styles the dim background behind the modal
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
              Tell us about your project and we’ll get back to you within 24
              hours.
            </p>
          </div>

          {/* Form */}
          <div className="mt-4">
            <QuoteForm close={close} />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ContactUsBtn;
