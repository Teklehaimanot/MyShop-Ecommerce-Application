import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri'
import './CartView.scss'
const CartView = () => {
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
                <div className='cart-table-item '>
                    <div className='cart-table-col cart-table-col-img'>
                        <div className='cart-table-col-img'></div>
                    </div>
                    <div className='cart-table-col name'>
                        <a href="#"> Women Red t-shirt </a>
                        <ul>
                            <li>Color: <strong>red</strong></li>
                            <li>Size: <strong>XL</strong></li>
                            <li>Material: <strong>Cotton</strong></li>
                        </ul>
                    </div>
                    <div className='cart-table-col'>
                        <span>$190</span>
                    </div>
                    <div className='cart-table-col'>
                        <div className='quantity'>
                            <span><FaMinus /></span>
                            <span>1</span>
                            <span><FaPlus /></span>
                        </div>

                    </div>
                    <div className='cart-table-col'>
                        <div className='total'>
                            <span>$190</span>
                            <a href="#"> <RiDeleteBin6Line /></a>
                        </div>
                    </div>
                </div>
                <div className='cart-table-item'>
                    <div className='cart-table-col'>
                        <div className='cart-table-col-img'></div>
                    </div>
                    <div className='cart-table-col name'>
                        <a href="#"> Women Red t-shirt </a>
                        <ul>
                            <li>Color: <strong>red</strong></li>
                            <li>Size: <strong>XL</strong></li>
                            <li>Material: <strong>Cotton</strong></li>
                        </ul>
                    </div>
                    <div className='cart-table-col'>
                        <span>$190</span>
                    </div>
                    <div className='cart-table-col'>
                        <div className='quantity'>
                            <span><FaMinus className='quantity-icon' /></span>
                            <span>1</span>
                            <span><FaPlus className='quantity-icon' /></span>
                        </div>
                    </div>

                    <div className='cart-table-col'>
                        <div className='total'>
                            <span>$190</span>
                            <a href="#"> <RiDeleteBin6Line /></a>
                        </div>
                    </div>
                </div>
                <div className='cart-table-item'>
                    <div className='cart-table-col'>
                        <div className='cart-table-col-img'></div>
                    </div>
                    <div className='cart-table-col name'>
                        <a href="#"> Women Red t-shirt </a>
                        <ul>
                            <li>Color: <strong>red</strong></li>
                            <li>Size: <strong>XL</strong></li>
                            <li>Material: <strong>Cotton</strong></li>
                        </ul>
                    </div>
                    <div className='cart-table-col'>
                        <span>$190</span>
                    </div>
                    <div className='cart-table-col'>
                        <div className='quantity'>
                            <span><FaMinus className='quantity-icon' /></span>
                            <span>1</span>
                            <span><FaPlus className='quantity-icon' /></span>
                        </div>
                    </div>

                    <div className='cart-table-col'>
                        <div className='total'>
                            <span>$190</span>
                            <a href="#"> <RiDeleteBin6Line /></a>
                        </div>
                    </div>
                </div>
                <div className='cart-table-item'>
                    <div className='cart-table-col'>
                        <div className='cart-table-col-img'></div>
                    </div>
                    <div className='cart-table-col name'>
                        <a href="#"> Women Red t-shirt </a>
                        <ul>
                            <li>Color: <strong>red</strong></li>
                            <li>Size: <strong>XL</strong></li>
                            <li>Material: <strong>Cotton</strong></li>
                        </ul>
                    </div>
                    <div className='cart-table-col'>
                        <span>$190</span>
                    </div>
                    <div className='cart-table-col'>
                        <div className='quantity'>
                            <span><FaMinus className='quantity-icon' /></span>
                            <span>1</span>
                            <span><FaPlus className='quantity-icon' /></span>
                        </div>
                    </div>

                    <div className='cart-table-col'>
                        <div className='total'>
                            <span>$190</span>
                            <a href="#"> <RiDeleteBin6Line /></a>
                        </div>
                    </div>
                </div>

                <div className='cart-table-item'>
                    <div className='cart-table-item-bottom'>
                        <a href="#">CONTINUE SHOPING</a>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <span>Shipping(+6$)</span>
                        </label>
                    </div>

                </div>
            </div>

            <div className= 'cart-total'>
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
