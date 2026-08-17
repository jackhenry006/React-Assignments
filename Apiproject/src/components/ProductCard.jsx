import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { isCartItems } = useContext(MyStore);

  const addToCart = () => {
    isCartItems((prev) => [...prev, product]);
    alert("Product Added Into Cart");
  };
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-contain"
      />

      {/* Category */}
      <span className="inline-block mt-3 px-2 py-1 text-xs bg-gray-100 rounded">
        {product.category}
      </span>

      {/* Title */}
      <h2 className="mt-2 text-lg font-semibold line-clamp-2">
        {product.title}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {product.description}
      </p>

      {/* Rating */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-yellow-500">⭐ {product.rating.rate}</span>
        <span className="text-sm text-gray-500">
          {product.rating.count} reviews
        </span>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-green-600">${product.price}</h3>

        {isInCart ? (
          <div className="flex items-center gap-3">
            <button className="px-2 py-1 bg-gray-200 rounded">-</button>

            <span>1</span>

            <button className="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
        ) : (
          <button
            onClick={addToCart}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
