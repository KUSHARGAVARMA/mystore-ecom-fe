import axios from "axios";
import React, { useEffect, useState, memo } from "react";
import SkeletonLoader from "../SkeletonLoader";
import { useCart } from "../../context/Cart";

// Memoized ProductItem component with console log
const RenderCartProducts = memo(({ product }) => {
  const [productList, setProductList] = useState(null);
  const {removeFromCart} = useCart();


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${product}`)
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [product]);

  // Ensure productList is not null before rendering
  if (!productList) {
    return <SkeletonLoader/>;
  }

  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center transform transition-transform hover:scale-105">
      <div className="h-40 w-40 mr-6">
        <img
          className="w-full h-full object-cover cursor-pointer rounded"
          src={productList.image}
          alt={productList.title}
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col items-end ">
        <h3 className="text-lg font-semibold mb-2">{productList.title}</h3>
        <p className="text-gray-700 mb-2">${productList.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        onClick={()=>{removeFromCart(productList.id)}}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
});

export default RenderCartProducts;
