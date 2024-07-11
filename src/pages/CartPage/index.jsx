import React, { useEffect } from "react";
import { useCart } from "../../context/Cart";
import RenderCartProducts from "../../components/RenderCartProducts";


const CartPage = () =>{
    const { cart } = useCart();
    return(
        <div className="container mx-auto p-4">
            
        <div className="flex-4 gap-4">
        {cart.length<=0?(<>No items in cart</>):

        (cart.map(cartProd =>
        
        <RenderCartProducts 
        product={cartProd} />    
        ))
    }
        </div>
        </div>
    )
}

export default CartPage;