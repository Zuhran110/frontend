import Link from "next/link";

const GetStartedNow = () => {
  return (
    <Link
      href="/"
      className="navbar-btn bg-custom-bg text-white text-center px-8 py-2 font-semibold border-2 rounded-lg border-transparent hidden md:flex"
    >
      Get Started Now
    </Link>
  );
};

export default GetStartedNow;
