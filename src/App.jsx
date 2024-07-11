import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/Topbar";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/Cart";
import Categories from "./pages/Categories";
import CategoryProductsPage from "./pages/CategoryProductPage";
import CartPage from "./pages/CartPage";
import './i18n';
const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:categoryName" element={<CategoryProductsPage />} />
              <Route path="/cart" element={<CartPage/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;