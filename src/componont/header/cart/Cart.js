import { useState } from "react"
import{FaShoppingCart} from 'react-icons/fa';
const Cart = () => {
    const [cart, setCart] = "0";
    return (
        <a href="">CART({cart}) <i > <FaShoppingCart/> </i></a>
    )
}

export default Cart
