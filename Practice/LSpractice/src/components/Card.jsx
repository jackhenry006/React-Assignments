import React from "react";

const Card = ({ user, setToggle }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100   duration-300">
      {/* Image */}
      <img className="w-full h-56 object-cover" src={user.image} alt="User" />

      {/* Details */}
      <div className="p-5">
        <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>

        <p className="text-slate-500 mt-2">{user.email}</p>

        <p className="text-slate-500 mt-1">{user.mobile}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Update
          </button>

          <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
