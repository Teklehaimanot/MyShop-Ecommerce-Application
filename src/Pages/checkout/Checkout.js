import React, { useContext, useState } from 'react'
import StripeContainer from '../../componont/stripeContainer/StripeContainer'
import { cartContext } from '../../context/CartProvider'
import './Checkout.scss'

const Checkout = () => {
    const { carts, shippingValue } = useContext(cartContext)
    const [showPaymentCard, setShowPaymentCard] = useState(false)

    const Subtotal = () => {
        const total = carts.reduce((acc, curr) => {
            return acc + curr.qunatity * curr.price
        }, 0)
        return total
    }

    const total = () => {
        return shippingValue + Subtotal()
    }
    return (
        <>
            {
                !showPaymentCard ? <form>
                    <div className='checkout-main'>
                        <div className='billing-details'>
                            <h3>Billing Details</h3>
                            <div className='form-group'>
                                <label>Country <span class="required">*</span></label>
                                <select className='form-control' name="country">
                                    <option value="6">Ethiopia</option>
                                    <option value="5">United Arab Emirates</option>
                                    <option value="1">China</option>
                                    <option value="2">United Kingdom</option>
                                    <option value="0">Germany</option>
                                    <option value="3">France</option>
                                    <option value="4">Japan</option>
                                </select>
                            </div>
                            <div className='full-name'>
                                <div className='form-group first-name'>
                                    <label>First Name <span class="required">*</span></label>
                                    <input type='text' />
                                </div>
                                <div className='form-group last-name'>
                                    <label>Last Name <span class="required">*</span></label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Address <span class="required">*</span></label>
                                <input type='text' />
                            </div>
                            <div className='form-group'>
                                <label>Town/City <span class="required">*</span></label>
                                <input type='text' />
                            </div>

                            <div className='full-name'>
                                <div className='form-group first-name'>
                                    <label>Email <span >*</span></label>
                                    <input type='email' />
                                </div>
                                <div className='form-group last-name'>
                                    <label>Phone Number <span>*</span></label>
                                    <input type='text' />
                                </div>
                            </div>
                        </div>
                        <div className='order-details'>
                            <h3>Your Order</h3>
                            <table>
                                <tr>
                                    <th>PRODUCT NAME</th>
                                    <th>TOTAL</th>
                                </tr>
                                {
                                    carts?.map((cart) => (
                                        <tr key={cart.id}>
                                            <td>{cart.title}</td>
                                            <td>${cart.price * cart.qunatity}</td>
                                        </tr>
                                    ))
                                }

                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td>${Subtotal()}</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>${shippingValue}</td>
                                </tr>
                                <tr>
                                    <td>Order Total</td>
                                    <td>${total()}</td>
                                </tr>

                            </table>
                            <hr />
                            <input type='submit' value='PLACE ORDER' />
                        </div>
                    </div>
                </form> : <StripeContainer />
            }


        </>

    )
}

export default Checkout