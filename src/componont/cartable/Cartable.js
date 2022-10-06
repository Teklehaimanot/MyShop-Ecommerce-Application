import React from 'react'
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IconContext } from "react-icons";

const Cartable = ({ cart, addQuantity, minuQuantity, deleteItem }) => {
    return (
        <div className='cart-table-item '>
            <div className='cart-table-col cart-table-col-img'>
                <div className='cart-table-col-img' style={{
                    backgroundImage: `url(${cart.img})`
                }}></div>
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
                    <IconContext.Provider value={{ color: "red", size: 15, className: "global-class-name" }}>
                        <RiDeleteBin6Line onClick={() => deleteItem(cart.id)}
                            onMouseOver={({ target }) => target.style.color = "blue"}
                            onMouseOut={({ target }) => target.style.color = "red"}
                        />
                    </IconContext.Provider>
                </div>

            </div>
        </div>
    )
}

export default Cartable