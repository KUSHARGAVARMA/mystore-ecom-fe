import React, { createContext, useState, useContext, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCart = useCallback((productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  }, []);

  const removeFromCart = useCallback((productId)=>{
setCart((prevCart) => prevCart.filter((item) => item !== productId));
  },[])

  return (
    <CartContext.Provider value={{ cart, handleCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}; 
