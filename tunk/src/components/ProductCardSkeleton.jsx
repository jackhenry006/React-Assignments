import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden animate-pulse">
      {/* Image */}
      <div className="h-56 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="h-6 w-20 bg-gray-200 rounded"></div>

        {/* Quantity */}
        <div className="h-4 w-28 bg-gray-200 rounded mt-3"></div>

        {/* Button */}
        <div className="h-10 w-full bg-gray-200 rounded-lg mt-5"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
