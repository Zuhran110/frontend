"use client";
import React, { useState } from "react";
import check from "@/assets/home/pricing/check.svg";
import circleSolid from "@/assets/home/pricing/circleSolid.svg";

const Plans = [
  {
    percentageOff: 20,
    discountedMonthlyPrice: 72,
    monthlyPrice: 60,
    discountedAnnualPrice: 864,
    annualPrice: 720,
  },
  {
    percentageOff: 40,
    discountedMonthlyPrice: 98,
    monthlyPrice: 70,
    discountedAnnualPrice: 1176,
    annualPrice: 840,
  },
  {
    percentageOff: 55,
    discountedMonthlyPrice: 139,
    monthlyPrice: 90,
    discountedAnnualPrice: 1668,
    annualPrice: 1080,
  },
];

function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center py-8 bg-custom-bg  text-white">
      {/* Segmented Control Container */}
      <div className="relative flex items-center w-64 h-12 p-1 bg-white rounded-full mb-6 cursor-pointer transition-all">
        {/* Sliding Background Indicator */}
        <div
          className={`absolute h-10 w-31 bg-custom-bg rounded-full transition-all duration-300 ease-in-out ${
            isAnnual ? "translate-x-31" : "translate-x-0"
          }`}
        />

        {/* Monthly Option */}
        <button
          onClick={() => setIsAnnual(false)}
          className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors duration-300 ${
            !isAnnual ? "text-white" : "text-slate-900"
          }`}
        >
          Monthly
        </button>

        {/* Annual Option */}
        <button
          onClick={() => setIsAnnual(true)}
          className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors duration-300 ${
            isAnnual ? "text-white" : "text-slate-900"
          }`}
        >
          Annual
        </button>
      </div>
      <ul className="flex flex-col md:flex-row justify-evenly w-3/4 my-6 gap-4">
        <li className="flex flex-row gap-2">
          {" "}
          <img src={circleSolid.src} alt="" /> Simple onboarding
        </li>
        <li className="flex flex-row gap-2">
          {" "}
          <img src={circleSolid.src} alt="" /> Dedicated UK-based accountant
        </li>
        <li className="flex flex-row gap-2">
          {" "}
          <img src={circleSolid.src} alt="" /> 30-day money-back guarantee
        </li>
      </ul>

      {/* Pricing Cards Container */}
      <div className="flex flex-wrap justify-evenly gap-6 items-stretch">
        {Plans.map((plan, index) => {
          const {
            percentageOff,
            discountedMonthlyPrice,
            monthlyPrice,
            discountedAnnualPrice,
            annualPrice,
          } = plan;
          const planNames = ["Basic", "Standard", "Premium"];
          const currentPrice = isAnnual ? annualPrice : monthlyPrice;
          const originalPrice = isAnnual
            ? discountedAnnualPrice
            : discountedMonthlyPrice;

          return (
            <div key={index} className="flex flex-col">
              {index === 1 ? (
                <div className="bg-custom-text text-white text-xs font-bold py-4 rounded-t-3xl text-center uppercase tracking-widest">
                  Most Popular
                </div>
              ) : (
                <div className="h-8 w-full"></div>
              )}
              <div
                className={`flex flex-col items-center p-8 bg-white text-black shadow-2xl w-full max-w-sm text-center flex-1 ${
                  index === 1
                    ? "border-4 border-custom-text rounded-b-3xl"
                    : "border border-slate-700 rounded-3xl"
                }`}
              >
                {percentageOff > 0 && (
                  <span className="bg-custom-bg text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                    {percentageOff}% OFF
                  </span>
                )}
                <h2 className="text-xl font-medium mb-2">{planNames[index]}</h2>
                <div className="flex flex-row items-center gap-2">
                  {percentageOff > 0 && (
                    <p className="text-sm text-gray-400 line-through mb-4">
                      £{originalPrice}/{isAnnual ? "year" : "month"}
                    </p>
                  )}
                  <div className="text-5xl font-bold mb-4 transition-all duration-200">
                    £{currentPrice}
                    <span className="text-lg font-normal text-gray-500">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </div>
                </div>

                <button className="w-full py-4 px-10 bg-custom-bg text-white font-bold rounded-2xl hover:opacity-90 transition-colors mb-6">
                  Get Started
                </button>
                <ul className="mb-8 leading-relaxed space-y-3">
                  <li className="flex flex-row items-center gap-2">
                    <img src={check.src} alt="check" className="w-5 h-5" />
                    <p className="text-start">Annual Accounts</p>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                    <img src={check.src} alt="check" className="w-5 h-5" />
                    <p className="text-start">Companies House Submission</p>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                    <img src={check.src} alt="check" className="w-5 h-5" />
                    <p className="text-start">
                      Dedicated accountant for ongoing support
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                    <img src={check.src} alt="check" className="w-5 h-5" />
                    <p>Corporation Tax</p>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                    <img src={check.src} alt="check" className="w-5 h-5" />
                    <p className="text-start">Xero subscription included</p>
                  </li>
                  {index >= 1 && (
                    <div>
                      <li className="flex flex-row items-center gap-2">
                        <img src={check.src} alt="check" className="w-5 h-5" />
                        <p className="text-start">Director's Tax Return</p>
                      </li>
                      <li className="flex flex-row items-center gap-2">
                        <img src={check.src} alt="check" className="w-5 h-5" />
                        <p className="text-start">VAT Filing</p>
                      </li>
                    </div>
                  )}
                  {index === 2 && (
                    <div>
                      <li className="flex flex-row items-center gap-2">
                        <img src={check.src} alt="check" className="w-5 h-5" />
                        <p className="text-start">
                          Payroll & Pension Filing For 1-5 Employees
                        </p>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingToggle;
