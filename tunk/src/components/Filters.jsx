import React from "react";
import { useProductApi } from "../hooks/productHooks";

const Filters = () => {
  let filterProduct = useProductApi();
  return (
    <div className="w-full bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-8">
      <div className="flex gap-3">
        {/* Search */}
        <input
          onChange={(e) => {
            filterProduct(e.target.value);
          }}
          type="text"
          placeholder="Search your products"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        {/* Category */}
        <select className="px-4 py-3 border border-gray-300 rounded-lg outline-none bg-white text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
          <option value="">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="furniture">Furniture</option>
          <option value="fragrances">Fragrances</option>
          <option value="beauty">Beauty</option>
        </select>

        {/* Search Button */}
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;
