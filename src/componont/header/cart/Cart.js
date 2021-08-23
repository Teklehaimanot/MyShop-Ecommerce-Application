import { useState } from "react"
import{FaShoppingCart} from 'react-icons/fa';
import './Cart.scss'
const Cart = () => {
    const [cart, setCart] = "0";
    return (
        <a href="">CART({cart}) <i > <FaShoppingCart/> </i></a>
    )
}

export default Cart
