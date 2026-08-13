import { createContext } from "react";
import { useState } from "react";
export let MyShop = createContext();

export const MyShopContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <MyShop.Provider
      value={{ isCartOpen, setIsCartOpen, setCartItems, cartItems }}
    >
      {children}
    </MyShop.Provider>
  );
};
