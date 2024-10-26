"use client";
import React, { useState, useEffect } from "react";

const LivingRoom = () => {
  // State to store featured products
  const [featureds, setFeatureds] = useState([]);

  // Fetch data from the backend
  const getFeatureds = () => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setFeatureds(data))
      .catch((err) => console.error("Error fetching featureds:", err));
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getFeatureds();
  }, []);

  return (
    <div className="w-full h-[397px] flex justify-center pt-[30px] ">
      {/* Left section (Living Room image and menu) */}
      <div className="flex w-[499px] h-[353px] relative">
        <div className="w-[206px] h-[353px] bg-[#1b1b1b] flex flex-col justify-center items-start p-4">
          <h1 className="text-[24px] font-gilda text-[#ffffff]">LIVING ROOM</h1>
          <ul className="mt-4 text-[#ffffff] text-[14px] leading-8">
            <li>Chair</li>
            <li>Table</li>
            <li>Sofa</li>
            <li>Plants</li>
            <li className="mt-2 underline">View all</li>
          </ul>
        </div>

        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-4_380x.png?v=1696904102"
          alt="Living Room"
          className="w-[293px] h-[320px] object-cover ml-auto"
        />
      </div>

      {/* Right section (dynamically loaded product images) */}
      <div className="w-[700px] h-[397px] flex justify-center items-center">
        <div className="flex">
          {featureds.length > 0 ? (
            featureds.map((item: any, index) => (
              <div key={index} className="flex flex-col items-center mx-4">
                <img
                  className="w-[194px] h-[240px] object-cover"
                  src={item.imageURL}
                  alt={item.title}
                />
                <h3 className="text-[16px] mt-2">{item.title}</h3>
                <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">
                  Quick Add
                </button>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
