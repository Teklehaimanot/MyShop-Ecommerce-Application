import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/CartProvider';
import { useContext } from 'react';
import './CartView.scss'
const CartView = () => {
    const { carts, setCarts } = useContext(cartContext);
    console.log('carts', carts)
    return (

        <div className='cart-area'>
            <div className='cart-table-list'>
                <div className='cart-table-item'>
                    <div className='cart-table-col'>PRODUCT</div>
                    <div className='cart-table-col'>NAME</div>
                    <div className='cart-table-col'>UNIT PRICE</div>
                    <div className='cart-table-col'>QUANTITY</div>
                    <div className='cart-table-col'>TOTAL</div>
                </div>

                {
                    carts.length > 0 ? (
                        carts.map((cart) => (
                            <div className='cart-table-item '>
                                <div className='cart-table-col cart-table-col-img'>
                                    <div className='cart-table-col-img'></div>
                                </div>
                                <div className='cart-table-col name'>
                                    <a href="#"> {cart.title}</a>
                                    <ul>
                                        <li>Color: <strong>{cart.color}</strong></li>
                                        <li>Size: <strong>{cart.size}</strong></li>
                                        <li>Material: <strong>{cart.material}</strong></li>
                                    </ul>
                                </div>
                                <div className='cart-table-col'>
                                    <span>${cart.price}</span>
                                </div>
                                <div className='cart-table-col'>
                                    <div className='quantity'>
                                        <span><FaMinus /></span>
                                        <span>{cart.qunatity}</span>
                                        <span><FaPlus /></span>
                                    </div>

                                </div>
                                <div className='cart-table-col'>
                                    <div className='total'>
                                        <span>${cart.qunatity *cart.price}</span>
                                        <a href="#"> <RiDeleteBin6Line /></a>
                                    </div>
                                </div>
                            </div>

                        ))

                    ) : (<div className='cart-table-item' style={{ padding: '1rem 0' }}>Empty. </div>)
                }

                <div className='cart-table-item'>
                    <div className='cart-table-item-bottom'>
                        <Link to="/">CONTINUE SHOPING</Link>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <span>Shipping(+6$)</span>
                        </label>
                    </div>

                </div>
            </div>

            <div className='cart-total'>
                <h3>Cart Total</h3>
                <ul>
                    <li>Subtotal: <span>$1040</span></li>
                    <li>Shipping: <span>$6</span></li>
                    <li>Total: <span>$1046</span></li>
                </ul>
                <a href="#">PROCEED TO CHECKOUT</a>

            </div>
        </div>
    )
}

export default CartView
