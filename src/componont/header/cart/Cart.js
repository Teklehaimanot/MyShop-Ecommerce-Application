import { useContext } from "react"
import { cartContext } from "../../../context/CartProvider";
import { FaShoppingCart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'
import { Link } from "react-router-dom";
import './Cart.scss'
const Cart = ({ onToggle, popupCart }) => {
    const { carts, setCarts } = useContext(cartContext)
    const subTotal = () => {
        let sum = 0;
        carts.forEach(cart => {
            sum = sum + (cart.qunatity * cart.price)
        });
        return sum;
    }
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
                                                        <span>{cart.size + " / " + cart.color}</span>
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
                                    <Link className="cart-checkout" onClick={onToggle} to="/checkout"> PROCEED TO CHECKOUT</Link>
                                    <Link onClick={onToggle} to='/cart'> VIEW SHOPING CART</Link>
                                </div>

                            </div>

                        </div>
                    ) : ('')
            }
        </>

    )
}

export default Cart
