import React, { useContext, useState } from 'react'
import axios from 'axios'
import './CheckoutForm.scss'
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import { cartContext } from '../../context/CartProvider'
import { Link } from 'react-router-dom'
import LoadingIcons from '../loadingIcon/LoadingIcons'


const CheckoutForm = ({ amount }) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const [success, setSuccess] = useState(false)
    const [erorr, setError] = useState()
    const stripe = useStripe();
    const elements = useElements();
    const [loader, setLoader] = useState(false)
    const { setCarts } = useContext(cartContext);
    const url = `${BASE_URL}/payment`

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true)
        setError(false)
        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post(url, {
                    amount: amount,
                    id
                })
                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                    setCarts([])
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            setError(error.message)
        }
    };

    return (
        <>

            {!success ?
                <div className='checkout-form'>
                    <form onSubmit={handleSubmit}>
                        <h3>ገበያ (Gebeya)</h3>
                        <CardElement />
                        <button type="submit" disabled={!stripe || !elements}>
                            {(!success && loader && !erorr) ? <LoadingIcons /> : `Pay ${amount}`}
                        </button>
                    </form>
                    <span style={{ color: 'red' }}>{erorr}</span>
                </div> :
                <div className='checkout-success'>
                    <h1>Thank You</h1>
                    <Link to='/'>GO HOME</Link>
                </div>
            }
        </>

    )
}

export default CheckoutForm