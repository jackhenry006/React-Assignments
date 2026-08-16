import React from "react";
import CartProductCard from "../components/CartProductCard";

const CartScreen = ({ cartItems }) => {
  return (
    <div className="text-6xl  h-screen">
      {cartItems.map((elem) => {
        return <CartProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
