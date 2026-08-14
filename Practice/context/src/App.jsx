import React, { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyStore } from "./context/MyContext";
import Home from "./components/Home";

const App = () => {
  let { count, setCount } = useContext(MyStore);
  return (
    <div>
      <h1>hellloooooo- {count}</h1>
      <button onClick={() => setCount(count + 1)}>inccc</button>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
