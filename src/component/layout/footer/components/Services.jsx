import Link from "next/link";

const Services = () => {
  return (
    <ul className="font-light mt-4 lg:mt-8">
      <li className="mb-2">
        <Link href="/Services/annual-accounts" className="hover:text-custom-text transition-colors">Accounts</Link>
      </li>
      <li className="mb-2">
        <Link href="/Services/vat-services" className="hover:text-custom-text transition-colors">VAT Services</Link>
      </li>
      <li className="mb-2">
        <Link href="/Services/bookkeeping-services" className="hover:text-custom-text transition-colors">Bookkeeping</Link>
      </li>
      <li className="mb-2">
        <Link href="/Services/payroll-services" className="hover:text-custom-text transition-colors">Payroll Services</Link>
      </li>
      <li className="mb-2">
        <Link href="/Services/corporation-tax" className="hover:text-custom-text transition-colors">Corporation Tax</Link>
      </li>
      <li className="mb-2">
        <Link href="/Services/self-assessment" className="hover:text-custom-text transition-colors">Self Assessment</Link>
      </li>
      <li className="mb-2">
        <Link href="/Services/company-formation" className="hover:text-custom-text transition-colors">Company Formation</Link>
      </li>
      <li className="mb-2">
        <Link href="/Services/company-secretary" className="hover:text-custom-text transition-colors">Company Secretary</Link>
      </li>
    </ul>
  );
};

export default Services;
