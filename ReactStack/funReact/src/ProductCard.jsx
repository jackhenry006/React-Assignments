import React from "react";

const ProductCard = ({ product, del }) => {
  return (
    <div className="p-4 border-2 rounded flex flex-col gap-2">
      <div className="w-40 h-50">
        <img src={product.image} alt="image" />
      </div>
      <div className="gap-2 flex flex-col">
        <h2 className="font-semibold">{product.title.substring(0, 15)}</h2>
        <p className="text-xs">{product.category}</p>
        <p className="text-green-600">{product.price}</p>
      </div>
      <button
        className="p-2 bg-red-500 rounded"
        onClick={() => del(product.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
