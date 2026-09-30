import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Product Image */}
      <div className="h-56 flex items-center justify-center p-4 bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Price */}
        <p className="text-xl font-bold text-gray-900">${product.price}</p>

        {/* Quantity */}
        <p className="text-sm text-gray-500 mt-1">Quantity: {product.stock}</p>

        {/* Add to Cart */}
        <button className="w-full mt-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
