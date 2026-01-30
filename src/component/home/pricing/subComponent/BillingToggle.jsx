"use client";
import React from "react";

function BillingToggle({ isAnnual, onToggle }) {
  return (
    <div className="relative flex items-center w-64 h-12 p-1 bg-white rounded-full mb-6 cursor-pointer transition-all">
      {/* Sliding Background Indicator */}
      <div
        className={`absolute h-10 w-31 bg-custom-bg rounded-full transition-all duration-300 ease-in-out ${
          isAnnual ? "translate-x-31" : "translate-x-0"
        }`}
      />

      {/* Monthly Option */}
      <button
        onClick={() => onToggle(false)}
        className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors duration-300 ${
          !isAnnual ? "text-white" : "text-slate-900"
        }`}
      >
        Monthly
      </button>

      {/* Annual Option */}
      <button
        onClick={() => onToggle(true)}
        className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors duration-300 ${
          isAnnual ? "text-white" : "text-slate-900"
        }`}
      >
        Annual
      </button>
    </div>
  );
}

export default BillingToggle;
