import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../../components/SkeletonLoader";
import { useCart } from "../../context/Cart";
import ProductItem from "../../components/ProductItem";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { handleCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = useCallback(
    (productId) => {
      handleCart(productId);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000); // Show feedback for 2 seconds
    },
    [handleCart]
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });

    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => {
        setFeaturedProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching featured products:", error);
      });

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all products:", error);
      });
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setSearchResults(filteredProducts);
  };


  return (
    <div className="container mx-auto p-4">

      {/* Hero Section */}
      <div className="bg-blue-500 text-white p-10 rounded-lg mb-6">
        <h1 className="text-4xl font-bold mb-2">{t('welcome')}</h1>
        <p className="text-xl mb-4">{t('findBestProducts')}</p>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded"
          onClick={() => navigate(`/products`)}
        >
          {t('shopNow')}
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-4 rounded border border-gray-300"
          placeholder={t('searchPlaceholder')}
        />
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">{t('searchResults')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <p>{t('noProductsFound')}</p>
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      <h2 className="text-2xl font-bold mb-4">{t('categories')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => <SkeletonLoader key={index} />)
        ) : (
          categories.map((category) => (
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
      <h2 className="text-2xl font-bold mb-4">{t('featuredProducts')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <ProductItem key={product.id} product={product} size={"large"} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
