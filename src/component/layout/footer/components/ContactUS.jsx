import Link from "next/link";

const ContactUS = () => {
  return (
    <ul className="font-light mt-4 lg:mt-8">
      <li className="mb-2">
        <Link href="/WhoWeHelp/sole-traders" className="hover:text-custom-text transition-colors">Sole Traders</Link>
      </li>
      <li className="mb-2">
        <Link href="/WhoWeHelp/limited-company" className="hover:text-custom-text transition-colors">Limited Companies</Link>
      </li>
      <li className="mb-2">
        <Link href="/WhoWeHelp/small-businesses" className="hover:text-custom-text transition-colors">Small Businesses</Link>
      </li>
      <li className="mb-2">
        <Link href="/WhoWeHelp/individuals" className="hover:text-custom-text transition-colors">Individuals</Link>
      </li>
      <li className="mb-2">
        <Link href="/WhoWeHelp/contractors" className="hover:text-custom-text transition-colors">Contractors</Link>
      </li>
      <li className="mb-2">
        <Link href="/WhoWeHelp/freelancers" className="hover:text-custom-text transition-colors">Freelancers</Link>
      </li>
    </ul>
  );
};
export default ContactUS;
