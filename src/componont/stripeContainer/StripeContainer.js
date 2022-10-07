import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';
import LoadingIcons from '../loadingIcon/LoadingIcons';


const stripePromise = loadStripe(process.env.REACT_APP_LOAD_STRIPE);


const StripeContainer = ({ amount }) => {

    return (
        <>
            {/* {
                true && <LoadingIcons />
            } */}
            <Elements stripe={stripePromise}>
                <CheckoutForm amount={amount} />
            </Elements>
        </>
    )
}

export default StripeContainer