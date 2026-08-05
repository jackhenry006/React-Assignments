import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercards from "./components/Usercards";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState([]);

  return (
    <div className="min-h-screen bg-slate-100 p-5">
      <Navbar setToggle={setToggle} />

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {toggle ? (
          show.map((elem, index) => (
            <Usercards setToggle={setToggle} key={index} show={elem} />
          ))
        ) : (
          <Form show={show} setShow={setShow} setToggle={setToggle} />
        )}
      </div>
    </div>
  );
};

export default App;
