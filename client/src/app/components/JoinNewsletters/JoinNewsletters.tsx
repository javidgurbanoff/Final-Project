import React from "react";

const JoinNewsletters = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 pb-[160px] ">
      <div className="mb-[4rem] ">
        <h1 className="text-[46px] font-gilda text-gray-800">
          Join Newsletters Now
        </h1>
        <p className="text-lg pt-3 text-[#777082] font-barlow">
          Stay Updated On Sales, New Items And More
        </p>
      </div>
      <div className="flex items-center border-2 border-[#aa8453] w-[650px] h-[60px] rounded-md">
        <input
          placeholder="Enter your email"
          className="w-[650px] h-[60px] text-[13px] px-6"
          type="email"
        />
        <button className="bg-[#aa8453] w-[160px] h-[60px] text-white px-8 py-3 text-[18px]  font-barlow hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all">
          Submit
        </button>
      </div>
    </div>
  );
};

export default JoinNewsletters;
