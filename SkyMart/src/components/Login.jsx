import React, { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";

const Login = ({ setToggle }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username == "" ||
      formData.email == "" ||
      formData.password == ""
    ) {
      alert("Enter all the fields first.");
      return;
    }
    console.log(formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Login Box */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handelSubmit}>
          {/* Username */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>

            <input
              name="username"
              required
              onChange={handelChange}
              value={formData.username}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              name="email"
              onChange={handelChange}
              required
              value={formData.email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              onChange={handelChange}
              value={formData.password}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => {
              return setToggle(true);
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
