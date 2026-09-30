import React from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { getProductsData } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";
import { useProductApi } from "../hooks/productHooks";
import Filters from "../components/Filters";

const ShopPage = () => {
  let { isPending, data, error, filteredProducts } = useProductApi();
  if (error) return <h1>{error.message}</h1>;
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Filters />
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>

        <p className="text-gray-500 mt-1">Explore our collection of products</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data.map((val) => <ProductCard key={val.id} product={val} />)}
      </div>
    </div>
  );
};

export default ShopPage;
