import React from "react";
import Link from "next/link";

const Dropdown = ({ trigger, items }) => {
  return (
    <div className="relative group">
      <div className="cursor-pointer">{trigger}</div>

      {items && (
        <div className="hidden group-hover:block absolute left-0 mt-2 bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 w-[200px]">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
