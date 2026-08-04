import React, { useState } from "react";
import Cards from "./components/Cards";
import Proform from "./components/Proform";

const App = () => {
  const [show, setShow] = useState({});

  return (
    <div>
      <Proform setShow={setShow} />
      <Cards show={show} />
    </div>
  );
};

export default App;
