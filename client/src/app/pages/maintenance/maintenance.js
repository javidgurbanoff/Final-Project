"use client";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-[48px] font-semibold text-[#aa8453]">
        Under Maintenance
      </h1>
      <p className="text-lg mt-4 text-gray-600">
        We're currently performing some updates. Please check back later.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Estimated time: <strong>2 hours</strong>
      </p>
    </div>
  );
};

export default Maintenance;
