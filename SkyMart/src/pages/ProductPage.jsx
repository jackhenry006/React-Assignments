import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";
const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);

  let getProductsData = async () => {
    try {
      let res = await axiosInstance.get("/products");
      console.log(res);
      setProductsData(res.data);
    } catch (error) {
      console.log("The error occured in ProductPage", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productsData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default ProductPage;
