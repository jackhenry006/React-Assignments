import React, { useContext, useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { MyStore } from "./context/MyContext";

const App = () => {
  const { toggle, setToggle } = useContext(MyStore);
  return <div>{toggle ? <SignUp /> : <Login setToggle={setToggle} />}</div>;
};

export default App;
