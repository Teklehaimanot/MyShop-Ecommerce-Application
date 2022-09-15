import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LhqlYCSGPUK5wDE3FJig8mnKl2VvS2mUJuJkDL9F1OfwJ7ws7jMDOYA6GVDoskWEZPzFkGi51ByxHoMQ2KaMS0w00Op8wDeyv');

const StripeContainer = () => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default StripeContainer