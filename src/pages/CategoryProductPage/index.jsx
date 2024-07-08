import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import ProductModal from "../../components/ProductModal";
import SkeletonLoader from "../../components/SkeletonLoader";

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
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
    axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then(response => {
        setProductsList(response.data);
        setLoading(false)
      }).catch(error => {
        console.error("Error fetching categories:", error)
        setLoading(false)}
      );
  }, [categoryName]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
          Array.from({ length: 7 }).map((_, index) => <SkeletonLoader key={index} />)
        ) :
        
        (
        productsList.map(product => (
          <ProductItem
            product={product}
            key={product.id}
            handleProductClick={handleProductClick}
          />
        )))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CategoryProductsPage;
