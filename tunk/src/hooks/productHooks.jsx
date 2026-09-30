import { useQuery } from "@tanstack/react-query";
import { getProductsData } from "../api/productApi";
import { isPending } from "@reduxjs/toolkit";
import { useState } from "react";

export let useProductApi = () => {
  const [filteredProducts, setFilteredProducts] = useState(null);

  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsData,
    staleTime: 5000,
  });

  let filterProduct = (searchParams) => {
    let filteredData = data.filter((val) => {
      val.title.toLowerCase().includes(searchParams.toLowerCase());
    });

    setFilteredProducts(filteredData);
  };
  return {
    isPending,
    data,
    error,
    filterProduct,
    filteredProducts,
  };
};
