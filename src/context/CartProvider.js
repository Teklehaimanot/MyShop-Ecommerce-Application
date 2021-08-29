import { useState, createContext } from "react"
// import Products from '../componont/products'
import Cart from "../componont/header/cart/Cart"

export const cartContext = createContext('default');
const CartProvider = (porps) => {
    const [carts, setCarts] = useState([]);


    return (
        <cartContext.Provider value ={{carts, setCarts}}>
            <div>
                {porps.children}
            </div>
        </cartContext.Provider>
    )
}

export default CartProvider
