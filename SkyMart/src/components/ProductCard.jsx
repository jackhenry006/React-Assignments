import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category */}
        <span className="mb-2 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>

          <span className="font-medium text-gray-800">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
