import React, { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef({});

  const [seeing, setSeeing] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      pname: formRef.current.product.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value,
    };
    setSeeing(obj);
  };
  return (
    <div className="w-80  bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex p-6 rounded flex-col gap-4">
        <input
          ref={(e) => {
            formRef.current.product = e;
          }}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          ref={(e) => {
            formRef.current.price = e;
          }}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />

        <span>Select Category</span>
        <select
          ref={(e) => {
            formRef.current.category = e;
          }}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>

        <input
          ref={(e) => {
            formRef.current.image = e;
          }}
          type="text"
          placeholder="Image"
        />

        <button className="p-2 bg-blue-600 text-white rounded"> Create </button>
      </form>
      <div>
        <h1>{seeing.pname}</h1>
        <h1>{seeing.price}</h1>
        <h1>{seeing.category}</h1>
        <h1>{seeing.image}</h1>
      </div>
    </div>
  );
};

export default Form;
