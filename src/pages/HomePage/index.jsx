import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../../components/SkeletonLoader";


const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate=useNavigate()
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
        setLoading(false)
      });

    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(response => {
        setFeaturedProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching featured products:", error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white p-10 rounded-lg mb-6">
        <h1 className="text-4xl font-bold mb-2">Welcome to MyStore</h1>
        <p className="text-xl mb-4">Find the best products here!</p>
        <button 
        className="bg-white text-blue-500 px-4 py-2 rounded"
        onClick={() => navigate(`/products`)}
>Shop Now</button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearch} 
          className="w-full p-4 rounded border border-gray-300" 
          placeholder="Search for products..."
        />
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      {loading ? (
          Array.from({ length: 4 }).map((_, index) => <SkeletonLoader key={index} />)
        ) :
        (
          categories.map(category => (
            <div
              key={category}
              className="bg-white shadow-md p-6 rounded-lg flex items-center justify-center text-xl font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate(`/category/${category}`)}
            >
              {category}
            </div>
          ))
        
        )}
      </div>

      {/* Featured Products */}
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {featuredProducts.map(product => (
    <div key={product.id} className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between transform transition-transform hover:scale-105">
      <div>
        <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4 rounded" />
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-2">{product.description}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-4">Add to Cart</button>
    </div>
  ))}
</div>

    </div>
  );
};

export default HomePage;
