import React, { useEffect, useState, lazy, Suspense, memo, useCallback } from "react";
import axios from "axios";
import { useCart } from "../../context/Cart";
import SkeletonLoader from "../../components/SkeletonLoader";

// Memoized ProductItem component with console log
const ProductItem = memo(({ product, handleProductClick }) => {
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
          <img
            className="w-full h-40 object-cover mb-4 cursor-pointer rounded"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
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

// Product Listing Page Component
const ProductListingPage = () => {

      useEffect(() => {
    adobe.target.triggerView("product-details");
  }, []);

    const [productsList, setProductsList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading,setLoading] = useState(true)
  
    const handleProductClick = useCallback((product) => {
        setSelectedProduct(product);
      }, []);
    
      const handleCloseModal = useCallback(() => {
        setSelectedProduct(null);
      }, []);
  
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          setProductsList(response.data);
          setLoading(false)
        })
        .catch(error => {
          console.error("Error fetching categories:", error);
          setLoading(false)
        });
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 16 }).map((_, index) => <SkeletonLoader key={index} />)
        ) :

          (productsList.map(product => (
            <ProductItem
              product={product}
              key={product.id}
              handleProductClick={handleProductClick}
            />
          )))
        }
        </div>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>
    );
  };
export default ProductListingPage;
