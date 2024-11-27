import React, { useState } from "react";

const TagsAndDescription = () => {
  const [expanded, setExpanded] = useState(false);

  const tags = [
    "13.7 × 6.3 × 4",
    "23.7 × 12.3 × 8",
    "28.7 × 16.3 × 10",
    "Black",
    "Blue",
    "Gray",
    "Pink",
    "Red",
    "White",
    "X",
    "XL",
  ];

  const description = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum eu quam blandit maximus. Donec at lacus lacus. 
    Donec ultricies lacus libero, fermentum mollis velit accumsan ac. Morbi in nunc erat. Sed a ligula tristique mi aliquam 
    pellentesque. Ut malesuada nisl eros, ut sollicitudin ex mattis quis. Praesent cursus a augue ac placerat. 
    Nam mattis mi ac dui suscipit egestas.
  `;

  const fullDescription = `
    ${description}
    Vestibulum lorem libero, feugiat dapibus urna id, gravida varius tellus. Nam sed congue quam. Sed sit amet libero augue. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et efficitur ante. 
    Vestibulum quis volutpat felis, volutpat ornare nunc. Vivamus ac aliquam justo. Mauris ultrices posuere velit, 
    eu elementum mauris.
    Phasellus vitae egestas orci. Pellentesque mi ex, vestibulum nec neque mollis, ultricies mollis elit. Sed purus elit, 
    aliquet at erat id, efficitur vehicula velit. Fusce tristique lectus a velit finibus, sed ultricies lacus volutpat.
  `;

  return (
    <div className="py-8 px-4 md:px-16 lg:px-32">
      <div className="flex flex-wrap gap-4 mb-6">
        <h3 className="font-bold text-lg flex items-center">
          <span role="img" aria-label="tag icon" className="mr-2">
            🏷️
          </span>
          Tags
        </h3>
        {tags.map((tag, index) => (
          <button
            key={index}
            className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-200 hover:shadow-xl hover:scale-105 transition transform"
          >
            {tag}
          </button>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Armchair</h2>
        <p className="text-gray-600 leading-relaxed">
          {expanded ? fullDescription : description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-[#000] hover:text-blue-800 justify-center items-center underline focus:outline-none"
        >
          {expanded ? "See Less -" : "See More +"}
        </button>
      </div>
    </div>
  );
};

export default TagsAndDescription;
