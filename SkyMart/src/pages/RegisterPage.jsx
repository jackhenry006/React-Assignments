import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
const RegisterPage = () => {
  let navigate = useNavigate();

  const { registeredUser, setRegisteredUser } = useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    console.log(data);
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    alert("User Registered Sucessfully");
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    reset;
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>

          <p className="text-slate-400 mt-2">Register to get started</p>
        </div>

        {/* Register Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Full Name
              </label>

              <input
                {...register("name", { required: "name is required" })}
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.name && <p> {errors.name.message} </p>}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email Address
              </label>

              <input
                {...register("email", { required: "email is required" })}
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.email && <p> {errors.email.message} </p>}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Password
              </label>

              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 character is required",
                  },
                })}
                type="password"
                id="password"
                placeholder="Create a password"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.password && <p> {errors.password.message} </p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-slate-400 mt-6">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                return navigate("/login");
              }}
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              Login
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-600 mt-6">
          © 2026 Your App. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
