import React from 'react'
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri'

const Cartable = ({ cart, addQuantity, minuQuantity }) => {
    return (
        <div className='cart-table-item '>
            <div className='cart-table-col cart-table-col-img'>
                <div className='cart-table-col-img'></div>
            </div>
            <div className='cart-table-col name'>
                <a > {cart.title}</a>
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
                    <button onClick={() => minuQuantity(cart.id)} disabled={cart.qunatity <= 0} ><FaMinus /></button>
                    <span>{cart.qunatity}</span>
                    <button onClick={() => addQuantity(cart.id)} ><FaPlus /></button>
                </div>

            </div>
            <div className='cart-table-col'>
                <div className='total'>
                    <span>${cart.qunatity * cart.price}</span>
                    <a href="#"> <RiDeleteBin6Line /></a>
                </div>
            </div>
        </div>
    )
}

export default Cartable