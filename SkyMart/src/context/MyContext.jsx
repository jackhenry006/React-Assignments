import { createContext, useState } from "react";

export const MyStore = createContext();
export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(userData);
  return (
    <MyStore.Provider value={{ userData, setUserData, toggle, setToggle }}>
      {children}
    </MyStore.Provider>
  );
};
