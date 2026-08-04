import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const [product, setProduct] = useState({});
  const handleForm = (data) => {
    console.log(data);
    setProduct(data);
    reset();
  };
  return (
    <div className="w-80  bg-white rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex p-6 rounded flex-col gap-4"
      >
        <input
          {...register("productName")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />

        <span>Select Category</span>
        <select
          {...register("catogory")}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>

        <input {...register("image")} type="text" placeholder="Image" />

        <button className="p-2 bg-blue-600 text-white rounded"> Create </button>
      </form>

      <div>
        <h1>{product.productName}</h1>
        <h1>{product.price}</h1>
        <h1>{product.catogory}</h1>
        <h1>{product.image}</h1>
      </div>
    </div>
  );
};

export default RHF;
