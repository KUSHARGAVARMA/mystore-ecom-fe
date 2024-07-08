import React, { createContext, useState, useContext, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCart = useCallback((productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  }, []);

  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
}; 
