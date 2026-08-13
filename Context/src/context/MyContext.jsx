import { createContext } from "react";

const MyStore = createContext();

export const contextProvider = ({ children }) => {
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
