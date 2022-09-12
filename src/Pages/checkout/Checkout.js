import React from 'react'
import { ToastContainer, toast } from 'react-toast'

const Checkout = () => {

    const wave = () => toast.success('Added to the cart', {
        backgroundColor: '#4fa83c',
        color: '#ffffff',
    })


    return (
        <div style={{ textAlign: 'center', margin: '10px' }}>
            <button onClick={wave} style={{ padding: '10px' }}>pay</button>
            <ToastContainer delay={3000} position="bottom-left" />
        </div>
    )
}

export default Checkout