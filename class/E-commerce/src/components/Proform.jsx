import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Proform = ({ setShow }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  let handleProduct = (data) => {
    console.log(data);
    setShow(data);
    reset();
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Add New Product</h2>

        <form onSubmit={handleSubmit(handleProduct)} className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block mb-2 font-medium">Product Name</label>
            <input
              {...register("proName")}
              type="text"
              placeholder="Enter product name"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">Category</label>
            <select
              {...register("category")}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Sports</option>
              <option>Books</option>
              <option>Furniture</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <input
              {...register("price")}
              type="number"
              placeholder="Enter price"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium">Image URL</label>
            <input
              {...register("image")}
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              {...register("description")}
              rows="4"
              placeholder="Enter product description"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-2 font-medium">Rating</label>
            <input
              {...register("Rating")}
              type="number"
              min="1"
              max="5"
              step="0.1"
              placeholder="4.5"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Proform;
