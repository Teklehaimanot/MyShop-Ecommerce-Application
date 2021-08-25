import { useState } from "react"
import { FaShoppingCart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'
import './Cart.scss'
const Cart = ({onToggle,popupCart }) => {
    const [cart, setCart] = useState(0);
    return (
        <>
            <a className='login' href="#" onClick={onToggle}>CART({cart}) <i > <FaShoppingCart /> </i></a>
            {
                 popupCart?
                    (
                        <div className='modal' >
                            <div className='cart-popup'>
                                <div className='cart-popup-header'>
                                    <h4> MY CART ( {cart})</h4>
                                    <GrClose className= 'gr-close ' onClick = { onToggle}/>

                                </div>
                                <div className='product-cart-contents' >
                                    <div className='product-cart'>
                                        <div className='product-cart-img' style={{ backgroundImage: `url("https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg")` }}>

                                        </div>
                                        <div className='product-cart-content'>
                                            <p> Women Red t-shirt</p>
                                            <span>Red / XS</span>
                                            <div className='product-price'>
                                                <span>1</span>
                                                <span>X</span>
                                                <span>$25</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='product-cart'>
                                        <div className='product-cart-img' style={{ backgroundImage: `url("https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg")` }}>

                                        </div>
                                        <div className='product-cart-content'>
                                            <p> Women Red t-shirt</p>
                                            <span>Red / XS</span>
                                            <div className='product-price'>
                                                <span>1</span>
                                                <span>X</span>
                                                <span>$25</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='product-cart'>
                                        <div className='product-cart-img' style={{ backgroundImage: `url("https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg")` }}>

                                        </div>
                                        <div className='product-cart-content'>
                                            <p> Women Red t-shirt</p>
                                            <span>Red / XS</span>
                                            <div className='product-price'>
                                                <span>1</span>
                                                <span>X</span>
                                                <span>$25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className= 'product-cart-subtotal'> 
                                    <span>SUBTOTAL</span>
                                    <span>$75</span>
                                </div>
                                <div className = 'product-cart-checkout'>
                                    <a href="#"> PROCEED TO CHECKOUT</a>
                                    <a href="#"> VIEW SHOPING CART</a>
                                </div>
                            </div>
                        </div>
                    ) : ('')
            }
        </>

    )
}

export default Cart
