import React from "react";
import { useForm } from "react-hook-form";
const Form = ({ show, setShow, setToggle }) => {
  let {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create User
        </h1>

        <form
          onSubmit={handleSubmit((data) => {
            setShow((prev) => [...prev, data]);
            console.log(data);
            reset();
            setToggle((prev) => !prev);
          })}
          className="space-y-5"
        >
          <input
            {...register("name", {
              required: "Name is Required",
              pattern: {
                value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                message: "Black Spaces are not allowed",
              },
            })}
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && (
            <p className="text-red-500"> {errors.name.message}</p>
          )}
          <input
            {...register("email", {
              required: "email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter Valid Email",
              },
            })}
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500"> {errors.email.message}</p>
          )}
          <input
            {...register("mobile", {
              required: "Mobile is Required",
              minLength: {
                value: 10,
                message: "Minimum 10 digits Required",
              },
              maxLength: {
                value: 10,
                message: "Maxmimum 10 digits Required",
              },
            })}
            type="tel"
            placeholder="Enter Mobile Number"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.mobile && (
            <p className="text-red-500"> {errors.mobile.message}</p>
          )}
          <input
            {...register("image", { required: "image is Required" })}
            type="text"
            placeholder="Image URL"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.image && (
            <p className="text-red-500"> {errors.image.message}</p>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
