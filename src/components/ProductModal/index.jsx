import React, { useEffect, useState, lazy, Suspense, memo, useCallback } from "react";
import axios from "axios";
import { useCart } from "../../context/Cart"

// Product Modal Component


const ProductModal = ({ product, onClose }) => {
    if (!product) return null;
  
    return (
      <div className="fixed inset-0 flex justify-center items-center z-50" onClick={onClose}>
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <div className="relative bg-white p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <div className="flex items-start">
            <img className="w-48 h-48 object-cover mr-4" src={product.image} alt={product.title} />
            <div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-xl font-semibold">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductModal
  