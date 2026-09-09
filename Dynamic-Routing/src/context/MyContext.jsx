import { createContext, useState } from "react";
export const MyStore = createContext();

export const ContextProvider = ({ Children }) => {
  const [productsData, setProductsData] = useState([]);
  console.log(productsData);
  return (
    <MyStore.Provider value={{ productsData, setProductsData }}>
      {Children}
    </MyStore.Provider>
  );
};
export default MyStore;
