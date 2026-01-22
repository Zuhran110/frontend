"use client";
import Link from "next/link";
import logo from "@/assets/layout/logo.svg";
import Email from "@/component/shared/button/Email";
import closeMenu from "@/assets/layout/CrossIcon.png";
import HamburgerMenu from "@/assets/layout/MenuBurger.png";
import ContactUsBtn from "@/component/shared/button/ContactUsBtn";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full px-16 xl:px-44 py-4 md:py-12 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-between hidden md:flex sticky top-0">
        <Link href="/" className="navbar-logo cursor-pointer">
          <img src={logo.src} alt="" />
        </Link>
        <div className="navbar-link justify-between text-gray-500 items-center flex">
          <Link href="/" className="p-1 pr-9 font-light inline-block">
            Home
          </Link>
          <Link href="/Pricing" className="p-1 pr-9 font-light inline-block">
            Pricing
          </Link>
          <Link href="/Service" className="p-1 pr-9 font-light inline-block">
            Services
          </Link>
          <Link href="/AboutUs" className="p-1 pr-9 font-light inline-block">
            About
          </Link>
          <Link href="/Contact" className="p-1 pr-9 font-light inline-block">
            Contact
          </Link>
        </div>
        <div className="flex gap-2">
          <Email />
          <ContactUsBtn />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full px-4 py-4 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-between flex md:hidden sticky top-0">
        <Link href="/" className="navbar-logo cursor-pointer">
          <img src={logo.src} alt="" />
        </Link>
        <div className="cursor-pointer" onClick={onClick}>
          <img
            src={menuOpen ? closeMenu.src : HamburgerMenu.src}
            alt={menuOpen ? "Close Menu" : "Menu"}
            className="w-6 h-auto block"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex md:hidden flex-col bg-white shadow-lg absolute w-full z-40 px-4 py-4">
          <Link
            href="/"
            className="p-2 font-light text-gray-500"
            onClick={onClick}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="p-2 font-light text-gray-500"
            onClick={onClick}
          >
            Pricing
          </Link>
          <Link
            href="/services"
            className="p-2 font-light text-gray-500"
            onClick={onClick}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="p-2 font-light text-gray-500"
            onClick={onClick}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="p-2 font-light text-gray-500"
            onClick={onClick}
          >
            Contact
          </Link>
          <div className="flex gap-2 mt-4">
            <Email />
            <ContactUsBtn />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
