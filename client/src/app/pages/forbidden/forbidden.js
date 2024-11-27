"use client";
import Link from "next/link";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-[72px] font-bold text-[#2b2b2b]">403</h1>
      <p className="text-lg mt-2 text-gray-600">
        You don’t have permission to access this page.
      </p>
      <Link href="/">
        <button className="mt-6 bg-[#aa8453] text-white py-2 px-6 rounded-lg hover:bg-[#2b2b2b]">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Forbidden;
