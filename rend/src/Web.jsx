import React from "react";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
const web = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  let [formData, setFormdata] = useState({
    // name: "",
    // email: "",
    // password: "",
  });

  const handleFormdata = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleFormdata}

        // onChange={(e) => setFormdata({ ...formData, name: e.target.value })}
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleFormdata}
        // onChange={(e) => setFormdata({ ...formData, email: e.target.value })}
        //   onChange={(e) => {
        //     setEmail(e.target.value);
        //   }}
      />
      <input
        name="password"
        type="text"
        placeholder="Password"
        onChange={handleFormdata}
        // onChange={(e) => setFormdata({ ...formData, password: e.target.value })}
        // onChange={(e) => {
        //   setPassword(e.target.value);
        // }}
      />

      {/* <h1>This is Name - {name}</h1>
      <h1>This is Email- {email}</h1>
      <h1>This is Password - {password}</h1> */}
    </div>
  );
};

export default web;
