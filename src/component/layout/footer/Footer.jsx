import Services from "./components/Services.jsx";
import Company from "./components/Company.jsx";
import ContactUS from "./components/ContactUS.jsx";
import LinkdinIcon from "@/assets/layout/lindin.svg";
import instagram from "@/assets/layout/instagram.svg";
import facebook from "@/assets/layout/facebook.svg";
import whatsapp from "@/assets/layout/whatsapp.svg";
import logoligth from "@/assets/layout/logoligth.svg";

const Footer = () => {
  return (
    <footer className=" bg-custom-bg text-white  rounded-base shadow-xs border border-default pb-3 md:pb-8 px-4 md:px-24 xl:px-44">
      <hr className="mb-3 border-default sm:mx-auto lg:my-6 2xl:my-12 border-gray-400" />
      <div className="flex flex-col md:flex-row items-start justify-between w-full text-gray-400 mb-3 md:mb-6 2xl:mb-12">
        <div className="flex flex-col gap-6 h-auto">
          <div>
            <img src={logoligth.src} alt="" className="mb-3 md:mb-6 2xl:mb-9" />
            <p className="wrap max-w-120 mt-2 font-light">
              We at Online Taxation Ltd are a reliable UK-based Bookkeeping firm
              that specialises in providing affordable accounting and tax filing
              services online for clients within the UK. 
            </p>
          </div>
          <div className="mt-auto">
            <p className="font-light">Follow us for more updates:</p>
            <ul className="flex gap-6 mt-3">
              <li>
                <img
                  src={LinkdinIcon.src}
                  alt="LinkdinIcon"
                  className="h-6 w-6 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={instagram.src}
                  alt="instagram"
                  className="h-6 w-6 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={facebook.src}
                  alt="facebook"
                  className="h-6 w-6 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={whatsapp.src}
                  alt="InstagramIcon"
                  className="h-6 w-6 cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
        <ul className="grid grid-rows-[1fr_1fr_1fr] grid-flow-col md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-none lg:w-1/2 mt-4 md:mt-0 text-sm font-medium text-body sm:mb-0 gap-4 lg:gap-12 ">
          <li className="">
            <span className="text-gray-200">Services</span> <Services />
          </li>

          <li className="no-wrap">
            <span className="text-gray-200">Business Services </span>
            <ContactUS />
          </li>
          <li className="">
            <span className="text-gray-200"> Support </span>
            <Company />
          </li>
        </ul>
      </div>
      <hr className="mb-3 border-default sm:mx-auto lg:my-3 border-gray-400" />
      <div className="flex justify-between text-gray-100">
        <span className="block text-sm text-body items-start">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Outsource Accounting
          </a>
          Outsource Accounting. All rights reserved.
        </span>
        <span className=" flex text-sm text-body items-end gap-3">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
