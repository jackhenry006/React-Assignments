import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(() => {
    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      return [];
    }

    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Invalid registeredUser data:", error);
      localStorage.removeItem("registeredUser");
      return [];
    }
  });

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser") || null),
  );

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
