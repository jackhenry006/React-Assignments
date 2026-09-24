import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-full bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back 👋</h1>

        <p className="mt-2 text-gray-500">
          Manage your users and products from your dashboard.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Users */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl">
            👥
          </div>

          <h2 className="text-lg font-semibold text-gray-900">Users</h2>

          <p className="mt-2 text-sm text-gray-500">
            View and manage all registered users.
          </p>

          <Link
            to="/main/users"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View Users
          </Link>
        </div>

        {/* Products */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-2xl">
            🛍️
          </div>

          <h2 className="text-lg font-semibold text-gray-900">Products</h2>

          <p className="mt-2 text-sm text-gray-500">
            Browse and manage all available products.
          </p>

          <Link
            to="/main/products"
            className="mt-5 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            View Products
          </Link>
        </div>

        {/* Dashboard */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-2xl">
            📊
          </div>

          <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>

          <p className="mt-2 text-sm text-gray-500">
            Manage your application from one place.
          </p>

          <Link
            to="/main"
            className="mt-5 inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>

        <p className="mt-1 text-sm text-gray-500">
          Quickly navigate to different sections.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/main/users"
            className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            👥 Manage Users
          </Link>

          <Link
            to="/main/products"
            className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            🛍️ Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
