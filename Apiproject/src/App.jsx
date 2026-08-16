import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, isCartItems] = useState([]);
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
      console.log(res);
    } catch {
      console.log("error in api ", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar setIsCartOpen={setIsCartOpen} />
      {isCartOpen ? (
        <div className="">
          <CartScreen cartItems={cartItems} />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {productsData.map((elem) => {
            return (
              <ProductCard
                isCartItems={isCartItems}
                product={elem}
                key={elem.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
