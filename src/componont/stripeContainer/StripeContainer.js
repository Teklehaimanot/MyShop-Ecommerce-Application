import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_LOAD_STRIPE);


const StripeContainer = ({ amount }) => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} />
        </Elements>
    )
}

export default StripeContainer