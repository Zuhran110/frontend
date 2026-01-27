import Link from "next/link";

const Email = () => {
  return (
    <Link
      href="/Email"
      className="bg-transparent px-8 py-2  border text-custom-bg rounded-lg hidden md:flex"
    >
      Email Us
    </Link>
  );
};

export default Email;
