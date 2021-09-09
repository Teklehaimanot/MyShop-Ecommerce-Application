import { useState, createContext } from "react"
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
