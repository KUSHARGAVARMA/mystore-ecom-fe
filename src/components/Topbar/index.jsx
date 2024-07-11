// src/components/TopBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cart";
import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MyStore</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/categories" className="text-gray-700 hover:text-gray-900">{t('categories')}</Link>
          <Link to="/products" className="text-gray-700 hover:text-gray-900">{t('allProducts')}</Link>
          <Link to="/cart" className="text-gray-700 hover:text-gray-900 flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.6 3M7 13h10l1.4-6H6.6M5 18h14v2H5zM9 21h6"></path>
            </svg>
            <span>{t('cart')}</span>
            {cart.length > 0 && (
              <span className="ml-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
      </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link to="/cart" className="text-gray-700 hover:text-gray-900 flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.6 3M7 13h10l1.4-6H6.6M5 18h14v2H5zM9 21h6"></path>
            </svg>
            {cart.length > 0 && (
              <span className="ml-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto p-4 flex flex-col space-y-2">
            <Link to="/categories" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>{t('categories')}</Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>{t('allProducts')}</Link>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 flex items-center" onClick={toggleMenu}>
              <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.6 3M7 13h10l1.4-6H6.6M5 18h14v2H5zM9 21h6"></path>
              </svg>
              <span>{t('cart')}</span>
              {cart.length > 0 && (
                <span className="ml-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
 
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
