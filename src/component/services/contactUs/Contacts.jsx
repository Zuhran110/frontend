import React from "react";
import Link from "next/link";

const Contacts = ({ data }) => {
  const { heading, description } = data;
  return (
    <div className="bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-8 md:px-16 xl:px-44 py-8 md:py-16 overflow-hidden">
      <section className="bg-custom-bg px-8 md:px-16 xl:px-44 py-12 md:py-16 border border-transparent rounded-2xl">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-white via-5% to-custom-text mb-4">
            {heading}
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
            <Link
              href="/"
              className="navbar-btn bg-white text-custom-bg px-8 py-2 font-semibold border-2 rounded-full border-transparent justify-center"
            >
              Get a Quote
            </Link>
            <Link
              href="/"
              className="px-8 py-2 border border-white text-white rounded-full  font-medium hover:bg-white hover:text-custom-bg transition-colors"
            >
              {"Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
