import React from "react";

const JoinNewsletters = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 pb-[160px]">
      <div className="mb-[4rem] text-center">
        <h1 className="text-[50px] font-gilda text-gray-800">
          Join Newsletters Now
        </h1>
        <p className="text-lg pt-3 text-[#777082] font-barlow">
          Stay Updated On Sales, New Items, And More
        </p>
      </div>
      <div className="flex items-center">
        <input
          placeholder="Enter your email"
          className="w-[490px] h-[60px] text-[13px] text-[#778082] border-2 border-[#aa8453] px-6 rounded-tl-md rounded-bl-md"
          type="email"
        />
        <button className="bg-[#aa8453] text-white w-[160px] h-[60px] rounded-tr-md rounded-br-md text-[18px] font-barlow hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default JoinNewsletters;
