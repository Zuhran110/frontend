"use client";

import Popup from "reactjs-popup";
import GetStarted from "../form/GetStarted"; // Adjust path as needed

const GetStartedNow = () => {
  return (
    <Popup
      trigger={
        <button
          type="button"
          className="bg-custom-bg text-white self-center mx-auto text-center px-8 py-2 border-2 rounded-lg border-transparent hidden md:flex hover:opacity-90 transition-all active:scale-95 shadow-sm"
        >
          Get Started Now
        </button>
      }
      modal
      nested
      overlayStyle={{
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      {(close) => (
        <div className="relative w-[90vw] max-w-xl mx-auto rounded-2xl shadow-2xl  animate-in fade-in zoom-in duration-300">
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

          {/* The GetStarted Form */}
          <GetStarted close={close} />
        </div>
      )}
    </Popup>
  );
};

export default GetStartedNow;
