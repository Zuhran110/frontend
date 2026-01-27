import React from "react";

const Faq = ({ text }) => {
  return (
    <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
      <span>{text}</span>
    </li>
  );
};

export default Faq;
