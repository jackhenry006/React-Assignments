import React, { useContext } from "react";
import CartProductCard from "../components/CartProductCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);
  return (
    <div className="text-6xl  h-screen">
      {cartItems.map((elem) => {
        return <CartProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
