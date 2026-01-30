import React from "react";
import Image from "next/image";
import LinkdinIcon from "@/assets/layout/lindin.svg";
import instagram from "@/assets/layout/instagram.svg";
import facebook from "@/assets/layout/facebook.svg";
import whatsapp from "@/assets/layout/whatsapp.svg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-wrap justify-center md:justify-start gap-6 font-semibold text-gray-700">
        <p className="">Get in Touch : </p>
        <p className="hover:text-blue-500 cursor-pointer">
          Info@onlineTaxation.com
        </p>
        <p>1234 5678 90</p>
      </div>

      <div className="flex flex-row gap-5 items-center">
        {[
          { src: LinkdinIcon, alt: "Linkedin" },
          { src: instagram, alt: "Instagram" },
          { src: facebook, alt: "Facebook" },
          { src: whatsapp, alt: "Whatsapp" },
        ].map((social, i) => (
          <Image
            key={i}
            src={social.src}
            alt={social.alt}
            className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
