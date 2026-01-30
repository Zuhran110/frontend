"use client";
import React, { useState } from "react";
import BillingToggle from "./BillingToggle";
import HighlightsList from "./HighlightsList";
import PricingCard from "./PricingCard";
import { PLANS, HIGHLIGHTS } from "./pricingconstants";

function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center py-8 bg-custom-bg text-white">
      {/* Billing Toggle */}
      <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

      {/* Highlights */}
      <HighlightsList highlights={HIGHLIGHTS} />

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-evenly gap-6 items-stretch">
        {PLANS.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            isAnnual={isAnnual}
            isPopular={index === 1}
            planIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default PricingToggle;
