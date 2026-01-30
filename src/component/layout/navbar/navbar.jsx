"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/layout/logo.svg";
import Email from "@/component/shared/button/Email";
import closeMenu from "@/assets/layout/CrossIcon.png";
import HamburgerMenu from "@/assets/layout/MenuBurger.png";
import ContactUsBtn from "@/component/shared/button/ContactUsBtn";
import Pop from "./subComp/Pop";
import { useState } from "react";
import Data from "@/component/tempData/servicePgData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClass = (href) =>
    isActive(href)
      ? "text-custom-text font-medium border-b-2 border-custom-text text-center p-2"
      : "text-gray-500 font-light";

  return (
    <>
      {/* Desktop Navbar */}
      <div className=" w-full px-3 md:px-16 xl:px-44 py-4 lg:py-8 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-between hidden lg:flex sticky top-0 border-b border-b-gray-300">
        <div className="flex-1">
          <Link href="/" className="navbar-logo cursor-pointer inline-block">
            <img src={logo.src} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-link flex items-center gap-6 xl:gap-10">
          <Link
            href="/"
            className={`p-1 text-center transition-colors ${linkClass("/")}`}
          >
            Home
          </Link>
          <Link
            href="/Pricing"
            className={`p-1 text-center transition-colors ${linkClass("/Pricing")}`}
          >
            Pricing
          </Link>
          <div className="group relative">
            {/* 1. The Trigger Link */}
            <Link
              href="/Service"
              className={`p-1 text-center transition-colors ${linkClass("/Service")}`}
            >
              Services
            </Link>

            {/* 2. The Positioned Container */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[80vw] max-w-8xl hidden group-hover:block z-50 pt-4">
              <div className="bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                <Pop data={Data} />
              </div>
            </div>
          </div>

          <Link
            href="/AboutUs"
            className={`p-1 text-center transition-colors ${linkClass("/AboutUs")}`}
          >
            About
          </Link>
          <Link
            href="/Contact"
            className={`p-1 text-center transition-colors ${linkClass("/Contact")}`}
          >
            Contact
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center gap-2">
          <Email />
          <ContactUsBtn />
        </div>
      </div>

      {/* Mobile & Tablet Navbar */}
      <nav className="sticky top-0 z-50 w-full lg:hidden">
        <div className="w-full px-4 md:px-8 py-4 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-between flex lg:hidden sticky top-0 border-b border-b-gray-300">
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

        {/* Mobile & Tablet Menu Dropdown */}
        {menuOpen && (
          <div className="flex lg:hidden flex-col bg-white shadow-lg absolute w-full z-40 px-4 md:px-8 py-4">
            <Link
              href="/"
              className={`p-2 ${linkClass("/")}`}
              onClick={onClick}
            >
              Home
            </Link>
            <Link
              href="/Pricing"
              className={`p-2 ${linkClass("/Pricing")}`}
              onClick={onClick}
            >
              Pricing
            </Link>
            <Link
              href="/Service"
              className={`p-2 ${linkClass("/Service")}`}
              onClick={onClick}
            >
              Services
            </Link>
            <Link
              href="/AboutUs"
              className={`p-2 ${linkClass("/AboutUs")}`}
              onClick={onClick}
            >
              About
            </Link>
            <Link
              href="/Contact"
              className={`p-2 ${linkClass("/Contact")}`}
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
      </nav>
    </>
  );
};

export default Navbar;
