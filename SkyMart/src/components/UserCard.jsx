import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* User Header */}
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
          {user.name.firstname.charAt(0).toUpperCase()}
          {user.name.lastname.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-lg font-semibold capitalize text-gray-900">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* User Information */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <span className="font-medium text-gray-500">Email</span>
          <span className="text-gray-800">{user.email}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-gray-500">Phone</span>
          <span className="text-gray-800">{user.phone}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-gray-500">City</span>
          <span className="capitalize text-gray-800">{user.address.city}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-gray-500">Street</span>
          <span className="capitalize text-gray-800">
            {user.address.street}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-gray-500">ZIP Code</span>
          <span className="text-gray-800">{user.address.zipcode}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
