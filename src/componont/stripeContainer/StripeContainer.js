import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';


const public_key = process.env.REACT_APP_LOAD_STRIPE

console.log(public_key)

const stripePromise = loadStripe(`${public_key}`);

const StripeContainer = ({ amount }) => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} />
        </Elements>
    )
}

export default StripeContainer