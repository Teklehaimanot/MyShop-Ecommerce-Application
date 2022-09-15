import React, { useState } from 'react'
import axios from 'axios'
import './CheckoutForm.scss'
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'


const CheckoutForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

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
                const response = await axios.post("http://localhost:5000/payment", {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    };

    return (
        <div className='checkout-form'>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <CardElement />
                    <button type="submit" disabled={!stripe || !elements}>
                        Pay
                    </button>
                </form> :
                <div>
                    <h3>congrats this is the best decision of you're life</h3>
                </div>
            }

        </div>
    )
}

export default CheckoutForm