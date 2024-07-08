import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MyStore</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/categories" className="text-gray-700 hover:text-gray-900">Categories</Link>
          <Link to="/products" className="text-gray-700 hover:text-gray-900"> All Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-gray-900">Cart</Link>
  

        </div>
      </div>
    </div>
  );
};

export default TopBar;
