import React from "react";
import FeatureList from "./FeatureList";
import { FEATURES } from "./pricingconstants";

function PricingCard({ plan, isAnnual, isPopular, planIndex }) {
  const {
    percentageOff,
    discountedMonthlyPrice,
    monthlyPrice,
    discountedAnnualPrice,
    annualPrice,
    name,
  } = plan;

  const currentPrice = isAnnual ? annualPrice : monthlyPrice;
  const originalPrice = isAnnual
    ? discountedAnnualPrice
    : discountedMonthlyPrice;

  // Determine which features to show
  const features = [...FEATURES.base];
  if (planIndex >= 1) {
    features.push(...FEATURES.standard);
  }
  if (planIndex === 2) {
    features.push(...FEATURES.premium);
  }

  return (
    <div className="flex flex-col">
      {isPopular ? (
        <div className="bg-custom-text text-white text-xs font-bold py-4 rounded-t-3xl text-center uppercase tracking-widest">
          Most Popular
        </div>
      ) : (
        <div className="h-8 w-full"></div>
      )}
      <div
        className={`flex flex-col items-center p-8 bg-white text-black shadow-2xl w-full max-w-sm text-center flex-1 ${
          isPopular
            ? "border-4 border-custom-text rounded-b-3xl"
            : "border border-slate-700 rounded-3xl"
        }`}
      >
        {percentageOff > 0 && (
          <span className="bg-custom-bg text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            {percentageOff}% OFF
          </span>
        )}
        <h2 className="text-xl font-medium mb-2">{name}</h2>
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

        <FeatureList features={features} />
      </div>
    </div>
  );
}

export default PricingCard;
