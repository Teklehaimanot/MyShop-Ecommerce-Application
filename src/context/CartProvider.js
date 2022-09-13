import { useState, createContext } from "react"
export const cartContext = createContext('default');
const CartProvider = (porps) => {
    const [carts, setCarts] = useState([]);
    const [shippingValue, setShippingValue] = useState(0);


    return (
        <cartContext.Provider value={{ carts, setCarts, shippingValue, setShippingValue }}>
            <div>
                {porps.children}
            </div>
        </cartContext.Provider>
    )
}

export default CartProvider
