import { Link } from 'react-router-dom'
import { cartContext } from '../../context/CartProvider';
import { useContext } from 'react';
import './CartView.scss'
import Cartable from '../../componont/cartable/Cartable';
import { useState } from 'react';
const CartView = () => {
    const { carts, setCarts, shippingValue, setShippingValue } = useContext(cartContext);
    const [checked, setChecked] = useState(shippingValue)
    const shipping = 6

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
        return shippingValue + Subtotal()
    }

    const handleChecked = (e) => {
        setChecked(e.target.checked)
        checked ? setShippingValue(0) : setShippingValue(shipping)
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

            </div>

            <div className='cart-table-item-bottom'>
                <Link to="/">CONTINUE SHOPING</Link>
                <label htmlFor="">
                    <input type="checkbox" checked={checked} onChange={handleChecked} />
                    <span>Shipping({shipping})</span>
                </label>
            </div>

            <div className='cart-total'>
                <h3>Cart Total</h3>
                <ul>
                    <li>Subtotal <span>${Subtotal()}</span></li>
                    <li>Shipping <span>${shippingValue}</span></li>
                    <li>Total <span>${total()}</span></li>
                </ul>
                <Link to="/checkout">PROCEED TO CHECKOUT</Link>

            </div>
        </div>
    )
}

export default CartView
