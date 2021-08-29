import { useState, createContext } from "react"
// import Products from '../componont/products'
import Cart from "../componont/header/cart/Cart"

export const cartContext = createContext('default');
const CartProvider = (porps) => {
    const [carts, setCarts] = useState(
        [
            {
                title: 'Women Red t-shirt',
                size: 'Red / XS',
                qunatity: 1,
                price: 25,
                id: 1,
                img: "https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg"
            },
            {
                title: 'Women Red t-shirt',
                size: 'Red / XS',
                qunatity: 1,
                price: 25,
                id: 2,
                img: "https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg"
            },
            {
                title: 'Women Red t-shirt',
                size: 'Red / XS',
                qunatity: 2,
                price: 25,
                id: 3,
                img: "https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg"
            }
        ]
    );


    return (
        <cartContext.Provider value ={{carts, setCarts}}>
            <div>
                {porps.children}
            </div>
        </cartContext.Provider>
    )
}

export default CartProvider
