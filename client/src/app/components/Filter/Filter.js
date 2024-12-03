import React from "react";
import { MdOutlineTune } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Filter = ({ filters, handleFilterChange, clearFilters, setFilters }) => {
  const handlePriceChange = (e, type) => {
    const value = Number(e.target.value);

    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (type === "minPrice") {
        updatedFilters.minPrice = Math.min(value, filters.maxPrice);
      } else if (type === "maxPrice") {
        updatedFilters.maxPrice = Math.max(value, filters.minPrice);
      }

      return updatedFilters;
    });
  };

  return (
    <div className="w-[270px]">
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <GiHamburgerMenu className="text-lg" />
          <h5 className="font-barlow text-lg text-[#202020] pl-2">
            CATEGORIES
          </h5>
        </div>
        <ul className="text-sm text-[#6b7280] space-y-2">
          {[
            "Living Room",
            "Bedroom",
            "Kitchen",
            "Planter",
            "Bookshelf",
            "See More +",
          ].map((item) => (
            <li
              key={item}
              className="py-2 px-2 hover:bg-[#efefef] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-[25px] pb-[25px]">
        <div className="flex items-center mb-6">
          <MdOutlineTune className="text-lg" />
          <h5 className="font-gilda text-lg text-[#202020] pl-2">FILTER BY</h5>
        </div>
        <div
          className="flex items-center justify-center bg-[#aa8453] text-white h-12 rounded cursor-pointer hover:bg-[#2b2b2b] hover:text-[#aa8453] transition"
          onClick={clearFilters}
        >
          <IoTrashOutline className="mr-2" />
          <h6 className="text-base">Clear All</h6>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h6 className="text-[12px] text-[#202020] font-extrabold font-barlow">
            COLOR
          </h6>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {[
            "bg-black",
            "bg-blue-500",
            "bg-red-600",
            "bg-blue-300",
            "bg-orange-500",
          ].map((color) => (
            <div
              key={color}
              className={`w-[28px] h-[28px] rounded-full ${color} cursor-pointer border`}
              onClick={() =>
                handleFilterChange(
                  {
                    target: {
                      value: color,
                      checked: !filters.color.includes(color),
                    },
                  },
                  "color"
                )
              }
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h6 className="text-[12px] text-[#202020] font-extrabold font-barlow">
            AVAILABILITY
          </h6>
        </div>
        <div className="space-y-2">
          {["In stock", "Out of stock"].map((status) => (
            <label
              key={status}
              className="flex items-center text-[#6b7280] text-sm"
            >
              <input
                type="checkbox"
                value={status}
                onChange={(e) => handleFilterChange(e, "availability")}
                checked={filters.availability.includes(status)}
                className="mr-2"
              />
              {status}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h6 className="text-[12px] text-[#202020] font-extrabold font-barlow">
            PRODUCT TYPE
          </h6>
        </div>
        <div className="space-y-2">
          {["Chairs", "Tables", "Lamps", "Clocks"].map((type) => (
            <label
              key={type}
              className="flex items-center text-[#6b7280] text-sm"
            >
              <input
                type="checkbox"
                value={type}
                onChange={(e) => handleFilterChange(e, "productType")}
                checked={filters.productType.includes(type)}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h6 className="text-[12px] text-[#202020] font-extrabold font-barlow">
            PRICE RANGE
          </h6>
        </div>
        <div className="flex justify-between text-sm">
          <span>${filters.minPrice}</span>
          <span>${filters.maxPrice}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={(e) => handlePriceChange(e, "minPrice")}
          className="w-full mb-2"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.maxPrice}
          onChange={(e) => handlePriceChange(e, "maxPrice")}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Filter;
