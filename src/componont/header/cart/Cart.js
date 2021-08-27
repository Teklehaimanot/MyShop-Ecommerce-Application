import { useState } from "react"
import { FaShoppingCart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'
import './Cart.scss'
const Cart = ({ onToggle, popupCart }) => {
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
                qunatity: 1,
                price: 25,
                id: 3,
                img: "https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg"
            }
        ]
    );

    const subTotal = () => {
        let sum = 0;
        carts.forEach(cart => {
            sum = sum + (cart.qunatity *cart.price)
        });
        return sum;
    }

    console.log(subTotal())
    return (
        <>
            <a className='login' href="#" onClick={onToggle}>CART({carts.length}) <i > <FaShoppingCart /> </i></a>
            {
                popupCart ?
                    (
                        <div className='modal' >
                            <div className='cart-popup'>
                                <div className='cart-popup-header'>
                                    <h4> MY CART ( {carts.length})</h4>
                                    <GrClose className='gr-close ' onClick={onToggle} />

                                </div>
                                <div className='product-cart-contents' >
                                    {
                                        carts.length > 0 ? (
                                            carts.map((cart) => (
                                                <div key={cart.id} className='product-cart'>
                                                    <div className='product-cart-img' style={{ backgroundImage: `url(${cart.img})` }}>

                                                    </div>
                                                    <div className='product-cart-content'>
                                                        <p> {cart.title}</p>
                                                        <span>{cart.size}</span>
                                                        <div className='product-price'>
                                                            <span>{cart.qunatity}</span>
                                                            <span>X</span>
                                                            <span>${cart.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))

                                        ) : (

                                            <span style={{ width: 0, height: 0, opacity: 0.6, margin: '1rem' }}>Empty</span>
                                        )
                                    }

                                </div>

                                <div className='product-cart-subtotal'>
                                    <span>SUBTOTAL</span>
                                    <span>${subTotal()}</span>
                                </div>

                                <div className='product-cart-checkout'>
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
