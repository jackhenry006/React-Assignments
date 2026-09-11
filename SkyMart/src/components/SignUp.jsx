import React, { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";

const SignUp = () => {
  const { userData, setUserData, toggle, setToggle } = useContext(MyStore);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = (e) => {
    const { name, value } = e.target;

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();

    if (newUser.password !== newUser.confirmPassword) {
      alert("The Password Is Not Matching");
      return;
    }

    const existingUser = userData.find((user) => user.email === newUser.email);

    if (existingUser) {
      alert("This email is already registered!");
      return;
    }

    setUserData((prev) => [...prev, newUser]);

    console.log("User Created:", newUser);

    setNewUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setToggle(true);

    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Sign Up Box */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>

          <p className="text-gray-500 mt-2">Sign up to get started</p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmitSignup}>
          {/* Username */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>

            <input
              onChange={handleSignUp}
              value={newUser.username}
              name="username"
              type="text"
              required
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
              onChange={handleSignUp}
              value={newUser.email}
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              onChange={handleSignUp}
              value={newUser.password}
              name="password"
              type="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              onChange={handleSignUp}
              value={newUser.confirmPassword}
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
