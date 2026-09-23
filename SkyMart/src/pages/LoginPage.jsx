import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";
const LoginPage = () => {
  let navigate = useNavigate();
  const { registeredUser, loggedInUser, setLoggedInUser } = useContext(Auth);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    console.log(data);
    let user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("invalid cred or User not found");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("User LoggedIn");
    navigate("/main");
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="text-slate-400 mt-2">Login to your account</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
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
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.password && <p> {errors.password.message} </p>}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Signup */}
          <p className="text-center text-sm text-slate-400 mt-6">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => {
                return navigate("/register");
              }}
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              Register
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

export default LoginPage;
