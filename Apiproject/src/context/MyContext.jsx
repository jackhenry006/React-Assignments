import { createContext } from "react";
import { useState } from "react";
export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, isCartItems] = useState([]);

  return (
    <MyStore.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, isCartItems }}
    >
      {children}
    </MyStore.Provider>
  );
};
