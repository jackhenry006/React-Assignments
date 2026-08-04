import React from "react";

const Cards = ({ show }) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image */}
      <img
        src={show?.image || "https://via.placeholder.com/300"}
        alt="Product"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
          {show.category}
        </span>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-800 mt-3">{show.proName}</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 leading-6">
          {show.description}
        </p>

        {/* Price */}
        <div className="mt-4">
          <p className="text-2xl font-bold text-green-600">{show.price}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 text-lg">★★★★☆</span>
          <span className="ml-2 text-gray-600 text-sm">{show.Rating}/5</span>
        </div>

        {/* Button */}
        <button className="w-full mt-6 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
          View Product
        </button>
      </div>
    </div>
  );
};

export default Cards;
