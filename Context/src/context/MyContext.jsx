import { createContext } from "react";

export const MyStore = createContext();

export const contextProvider = ({ children }) => {
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
