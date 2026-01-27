import React from "react";
import Faq from "./Faq";

const Faqs = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <p className="text-sm font-medium text-gray-700 mb-3">Related Questions:</p>
      <ul className="space-y-3">
        {faqs.map((faq, index) => (
          <Faq key={index} text={faq} />
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
