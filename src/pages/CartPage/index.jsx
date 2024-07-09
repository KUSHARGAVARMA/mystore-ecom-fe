import React, { useEffect } from "react";
import { useCart } from "../../context/Cart";
import RenderCartProducts from "../../components/RenderCartProducts";


const CartPage = () =>{
    const { cart } = useCart();
    return(
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
        <div className="flex-4 gap-4">

        {cart.map(cartProd =>
        
        <RenderCartProducts 
        product={cartProd}     />    
        )}
        </div>
        </div>
    )
}

export default CartPage;