import React from "react";
import Link from "next/link";
import ContactUsBtn from "@/component/shared/button/ContactUsBtn";

const Hero = ({ data }) => {
  return (
    <div className="relative bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-8 md:px-16 xl:px-44 py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* left text */}
        <div className="flex-1 max-w-xl ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-custom-text text-center md:text-start">
            {data.title}
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            {data.paragraph1}
          </p>

          {data.paragraph2 && (
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              {data.paragraph2}
            </p>
          )}

          {data.pointers && data.pointers.length > 0 && (
            <ul className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 space-y-2">
              {data.pointers.map((pointer, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src={pointer.img.src}
                    alt=""
                    className="w-5 h-5 mt-0.5"
                  />
                  <span>{pointer.point}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="w-full md:w-1/2 2xl:w-1/3 flex justify-center md:justify-start ">
            <ContactUsBtn />
          </div>
        </div>

        {/* image */}
        <div className="flex-1 w-full max-w-md lg:max-w-lg">
          <img
            src={data.image.src}
            alt={data.title}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
