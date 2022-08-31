import { Link } from 'react-router-dom'
import { cartContext } from '../../context/CartProvider';
import { useContext } from 'react';
import './CartView.scss'
import Cartable from '../../componont/cartable/Cartable';
import { useState } from 'react';
const CartView = () => {
    const { carts, setCarts } = useContext(cartContext);
    const [checked, setChecked] = useState(false)
    const [shippingValue, setShippingValue] = useState(6);
    const shipping = checked ? shippingValue : 0

    const addQuantity = (id) => {
        setCarts(carts.map((cart) => {
            return cart.id === id ? { ...cart, qunatity: cart.qunatity + 1 } : cart
        }))
    }
    const minuQuantity = (id) => {
        setCarts(carts.map((cart) => {
            return cart.id === id ? { ...cart, qunatity: cart.qunatity - 1 } : cart
        }))
    }

    const deleteItem = (id) => {
        setCarts(carts.filter((cart) => cart.id !== id))
    }

    const Subtotal = () => {
        const total = carts.reduce((acc, curr) => {
            return acc + curr.qunatity * curr.price
        }, 0)
        return total
    }
    const total = () => {
        return shipping + Subtotal()
    }
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
                    carts ? (
                        carts.map((cart) => (
                            <Cartable key={cart.id} cart={cart} addQuantity={addQuantity} minuQuantity={minuQuantity} deleteItem={deleteItem} />
                        ))

                    ) : (<div className='cart-table-item' style={{ padding: '1rem 0' }}>Empty. </div>)
                }

                <div className='cart-table-item'>
                    <div className='cart-table-item-bottom'>
                        <Link to="/">CONTINUE SHOPING</Link>
                        <label htmlFor="">
                            <input type="checkbox" value={checked} onChange={(e) => setChecked(e.target.checked)} />
                            <span>Shipping({shippingValue})</span>
                        </label>
                    </div>

                </div>
            </div>

            <div className='cart-total'>
                <h3>Cart Total</h3>
                <ul>
                    <li>Subtotal: <span>${Subtotal()}</span></li>
                    <li>Shipping: <span>${shipping}</span></li>
                    <li>Total: <span>${total()}</span></li>
                </ul>
                <a href="#">PROCEED TO CHECKOUT</a>

            </div>
        </div>
    )
}

export default CartView
