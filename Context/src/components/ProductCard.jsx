import React from "react";
import { Star } from "lucide-react"; // Optional: npm install lucide-react
import { MyShop } from "../context/MyWebsite";
import { useContext } from "react";
const ProductCard = ({ products }) => {
  let { setCartItems } = useContext(MyShop);
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-white p-6">
        <img
          src="gyreg"
          alt=""
          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-zinc-950/80 px-2.5 py-1 text-[10px] font-bold text-orange-500 uppercase tracking-wider backdrop-blur-md border border-zinc-700">
          Category
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-medium text-zinc-100 line-clamp-1 group-hover:text-orange-500 transition-colors">
          title
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1 mb-2">
          <Star size={14} className="fill-orange-500 text-orange-500" />
          <span className="text-xs font-bold text-zinc-300">Rating</span>
          <span className="text-xs text-zinc-500">rating count</span>
        </div>

        <p className="mt-1 line-clamp-2 text-xs text-zinc-400 leading-relaxed">
          description
        </p>

        {/* Price & Action */}
        <div className="mt-auto pt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-white">price</span>
          <button
            onClick={() => {
              return setCartItems((prev) => [...prev, products]);
            }}
            className="rounded-lg bg-orange-500 px-4 py-2 text-xs font-bold text-black transition-all duration-200 hover:bg-orange-400 active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
