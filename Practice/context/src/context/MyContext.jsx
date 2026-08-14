import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  let [count, setCount] = useState(0);
  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
};
