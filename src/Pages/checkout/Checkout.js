import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import StripeContainer from '../../componont/stripeContainer/StripeContainer'
import { cartContext } from '../../context/CartProvider'
import './Checkout.scss'

const Checkout = () => {
    const { carts, shippingValue } = useContext(cartContext)
    const [showPaymentCard, setShowPaymentCard] = useState(false)
    const [error, setError] = useState('')
    const [billingForm, setBillingForm] = useState({
        country: 'Ethiopia',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: '',
        phoneNumber: ''
    })
    const [btnValue, setBtnValue] = useState(1)
    const history = useHistory();

    const Subtotal = () => {
        const total = carts.reduce((acc, curr) => {
            return acc + curr.qunatity * curr.price
        }, 0)
        return total
    }

    const total = () => {
        return shippingValue + Subtotal()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { country, firstName, lastName, address, city, email, phoneNumber } = billingForm
        if (Subtotal()) {
            if (country && firstName && lastName && address && city && email && phoneNumber) {
                if (btnValue === 1) {
                    setShowPaymentCard(true)
                } if (btnValue === 2) {
                    await PayWithChapa()
                }

            } else (
                setError('Please fill out all required fields')
            )
        } else {
            setError('there is 0 item on your cart')
        }
    }

    const PayWithChapa = async () => {
        const BASE_URL = process.env.REACT_APP_BASE_URL
        const url = `${BASE_URL}/api/pay`
        const { country, firstName, lastName, address, city, email, phoneNumber } = billingForm

        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: total(),
                email: email,
                first_name: firstName,
                last_name: lastName,
                country: country,
                address, address,
                city: city,
                phoneNumber: phoneNumber
            })
        })
        const data = await result.json()
        console.log(data.status)
        if (data.status === "success") {
            window.location.replace(data.data.checkout_url)
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setBillingForm((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const { country, firstName, lastName, address, city, email, phoneNumber } = billingForm
    return (
        <>
            {
                !showPaymentCard ? <form onSubmit={handleSubmit}>
                    <div className='checkout-main'>
                        <div className='billing-details'>
                            <h3>Billing Details</h3>
                            <div className='form-group'>
                                <label>Country <span>*</span></label>
                                <select className='form-control' name="country" value={country} onChange={handleChange}>
                                    <option value="6">Ethiopia</option>
                                    <option value="5">United Arab Emirates</option>
                                    <option value="1">China</option>
                                    <option value="2">United Kingdom</option>
                                    <option value="0">Germany</option>
                                    <option value="3">France</option>
                                    <option value="4">Japan</option>
                                </select>
                            </div>
                            <div className='form-name' >
                                <div className='form-name-input'>
                                    <label>First Name <span>*</span></label>
                                    <input type='text' name='firstName' value={firstName} onChange={handleChange} />
                                </div>
                                <div className='form-name-input'>
                                    <label>Last Name <span>*</span></label>
                                    <input type='text' name='lastName' value={lastName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Address <span>*</span></label>
                                <input type='text' name='address' value={address} onChange={handleChange} />
                            </div>
                            <div className='form-group'>
                                <label>Town/City <span>*</span></label>
                                <input type='text' name='city' value={city} onChange={handleChange} />
                            </div>

                            <div className='form-name' >
                                <div className='form-name-input'>
                                    <label>Email <span >*</span></label>
                                    <input type='email' name='email' value={email} onChange={handleChange} />
                                </div>
                                <div className='form-name-input'>
                                    <label>Phone Number <span>*</span></label>
                                    <input type='text' name='phoneNumber' value={phoneNumber} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className='order-details'>
                            <h3>Your Order</h3>
                            <table>
                                <tbody>
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
                                </tbody>
                            </table>
                            <hr />
                            <input onClick={() => setBtnValue(1)} type='submit' value='PLACE ORDER' />
                            <input onClick={() => setBtnValue(2)} type='submit' value='PAY WITH LOCAL BANK' />
                            <span style={{ color: 'red', paddingTop: '3rem' }}>{error}</span>
                        </div>
                    </div>
                </form> : <StripeContainer amount={total()} />
            }

        </>

    )
}

export default Checkout