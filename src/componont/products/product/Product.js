import { useContext } from "react"
import { cartContext } from "../../../context/CartProvider"
import { ToastContainer, toast } from 'react-toast'
const Product = ({ product }) => {
    const { carts, setCarts } = useContext(cartContext)

    const addToCart = () => {
        const feachCart = carts.filter(cart => cart.id === product.id);
        if (!feachCart.length) {
            setCarts([...carts, {
                title: product.text,
                size: product.size,
                color: product.color,
                material: product.material,
                qunatity: 1,
                price: product.price,
                id: product.id,
                img: product.img
            }])
        }
        else
            setCarts(
                carts.map(cart => cart.id === product.id ? { ...cart, qunatity: cart.qunatity + 1 } : cart)
            )
    }

    const wave = () => toast.success('Added to the cart', {
        backgroundColor: '#4fa83c',
        color: '#ffffff',
    })

    return (
        <div className='single-product-box'>
            <div className='product-img' style={{
                backgroundImage: `url(${product.img})`
            }} ></div>
            <div className='product-content' >
                <span>{product.text}</span>
                <p> {`$${product.price}`} </p>
                <button onClick={() => {
                    addToCart();
                    wave()
                }}>ADD TO CART</button>
                <ToastContainer delay={2000} />
            </div>
        </div>
    )
}

export default Product
