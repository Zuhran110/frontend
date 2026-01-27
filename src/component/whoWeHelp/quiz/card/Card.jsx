import React from "react";

const Card = ({ item, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {/* Question Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors duration-200"
      >
        <span className="text-base md:text-lg font-medium text-gray-800 pr-4">
          {item.heading}
        </span>
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white text-custom-bg border border-gray-200">
          {isOpen ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Answer Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed">
          <p>{item.description}</p>
          {item.descriptiontwo && <p className="mt-3">{item.descriptiontwo}</p>}
          {item.points && item.points.length > 0 && (
            <ul className="mt-3 list-disc list-inside space-y-1">
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
