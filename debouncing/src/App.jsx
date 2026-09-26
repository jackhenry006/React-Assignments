import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  let [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);

  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);
    setProductsData(res.data);
  };

  let filterData = () => {
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!searchData) return;
    let timeout = setTimeout(() => {
      filterData();
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchData]);
  return (
    <div>
      <h1>DEBOUNCING</h1>
      <input
        type="text"
        placeholder="search the products"
        onChange={(e) => setSearchData(e.target.value)}
      />
      {productsData.map((val) => {
        return <h1 key={val.id}> {val.title} </h1>;
      })}
    </div>
  );
};

export default App;
