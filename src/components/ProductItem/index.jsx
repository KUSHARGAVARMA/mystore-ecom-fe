import React, { useEffect, useState, lazy, Suspense, memo, useCallback } from "react";
import axios from "axios";
import { useCart } from "../../context/Cart"

// Memoized ProductItem component with console log
const ProductItem = memo(({ product, handleProductClick, size }) => {
    const { handleCart } = useCart();
    const [addedToCart, setAddedToCart] = useState(false);
  
    const handleAddToCart = useCallback((productId) => {
        handleCart(productId);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000); // Show feedback for 2 seconds
      }, [handleCart]);
      
    console.log(`Rendering ProductItem for ${product.title}`);
    return (
      <div className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between transform transition-transform hover:scale-105">
        <div onClick={() => handleProductClick(product)}>
          {console.log(size)}
          {size==="large"? <img
            className="w-full h-80 object-cover mb-4 cursor-pointer rounded"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />:<img
          className="w-full h-40 object-cover mb-4 cursor-pointer rounded"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />}
      
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-2">${product.price}</p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-4"
          onClick={() => handleAddToCart(product.id)}
        >
          Add to Cart
        </button>
        {addedToCart && (
          <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-sm rounded">
            Added!
          </span>
        )}
      </div>
    );
  });

  export default ProductItem