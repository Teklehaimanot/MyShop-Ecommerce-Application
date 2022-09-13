import React from 'react'
import './Checkout.scss'

const Checkout = () => {

    return (
        <form>
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
                            <label>Email <span class="required">*</span></label>
                            <input type='email' />
                        </div>
                        <div className='form-group last-name'>
                            <label>Phone Number <span class="required">*</span></label>
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
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>$200</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>$300</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$600</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>$6</td>
                        </tr>
                        <tr>
                            <td>Order Total</td>
                            <td>$606</td>
                        </tr>

                    </table>
                    <hr />
                    <input type='submit' value='PLACE ORDER' />
                </div>
            </div>
        </form>

    )
}

export default Checkout