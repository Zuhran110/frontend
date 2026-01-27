import Link from "next/link";

const Company = () => {
  return (
    <ul className="font-light mt-4 lg:mt-8">
      <li className="mb-2">
        <Link href="/AboutUs" className="hover:text-custom-text transition-colors">
          About Us
        </Link>
      </li>
      <li className="mb-2">
        <Link href="/Service" className="hover:text-custom-text transition-colors">
          Services
        </Link>
      </li>
      <li className="mb-2">
        <Link href="/Pricing" className="hover:text-custom-text transition-colors">
          Pricing
        </Link>
      </li>
      <li className="mb-2">
        <Link href="/Contact" className="hover:text-custom-text transition-colors">
          Contact
        </Link>
      </li>
    </ul>
  );
};
export default Company;
