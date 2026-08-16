import React from "react";

const CartProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div className="flex gap-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 object-contain"
        />

        <div>
          <h2 className="font-semibold text-lg line-clamp-1">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500 capitalize">{product.category}</p>

          <p className="text-yellow-500 mt-1">
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>

          <p className="text-xl font-bold text-green-600 mt-2">
            ${product.price}
          </p>
        </div>
      </div>

      <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
        Remove
      </button>
    </div>
  );
};

export default CartProductCard;
