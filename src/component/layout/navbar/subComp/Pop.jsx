import React, { useState } from "react";
import Footer from "./subComp/Footer";
import Image from "next/image";
import Link from "next/link";

const Pop = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentData = Array.isArray(data) ? data[selectedIndex] : data;
  const imageSrc = currentData.logo?.src || currentData.logo;

  return (
    <div className="bg-linear-to-r from-blue-50 via-blue-50 to-white px-6 md:px-16 xl:px-44 py-8 text-start">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_3fr] items-start gap-2">
        {/* Left Column: List - Display all items from data array */}
        <div>
          <ul className="space-y-1">
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`group cursor-pointer transition-all ${
                  index === selectedIndex
                    ? "bg-blue-200 p-2 rounded-lg"
                    : "bg-transparent p-2 hover:bg-blue-50 rounded-lg"
                }`}
              >
                <h2
                  className={`text-lg font-bold transition-colors ${
                    index === selectedIndex
                      ? "text-custom-bg"
                      : "text-gray-600 group-hover:text-custom-bg"
                  }`}
                >
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mt-2">
                  {item.paragraph1?.substring(0, 50)}...
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Vertical Divider */}
        <div className="hidden md:flex justify-center self-stretch py-4">
          <div className="w-px bg-gray-300 h-full"></div>
        </div>

        {/* Right Column: Description - Display selected item's full content */}
        <div className="flex flex-col h-full">
          <Image
            src={imageSrc}
            alt={`${currentData?.title} logo`}
            width={100}
            height={40}
            className="rounded-2xl object-contain"
            priority
          />

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {currentData.title}
          </h1>
          <p className="text-gray-600 leading-7 text-lg">
            {currentData.paragraph1}
          </p>
          {currentData.paragraph2 && (
            <p className="text-gray-600 leading-7 text-lg mt-4">
              {currentData.paragraph2}
            </p>
          )}
          {currentData.paragraph3 && (
            <p className="text-gray-600 leading-7 text-lg mt-4">
              {currentData.paragraph3}
            </p>
          )}
          <Link
            className="w-full md:w-1/2 flex justify-start mt-3"
            href={`/Services/${currentData.slug}`}
          >
            <p className="bg-custom-bg text-white px-8 py-2 border-2 rounded-lg border-transparent hidden md:flex items-center justify-center hover:opacity-90 transition-all active:scale-95 shadow-sm">
              Learn more...
            </p>
          </Link>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="my-10 border-gray-300" />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Pop;
