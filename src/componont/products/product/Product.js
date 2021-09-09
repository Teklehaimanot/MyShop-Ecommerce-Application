import { useContext } from "react"
import { cartContext } from "../../../context/CartProvider"
const Product = ({ product }) => {
    const { carts, setCarts } = useContext(cartContext)

    const addToCart = () => {
        const feachCart = carts.filter(cart => cart.id === product.id);
        if (!feachCart.length) {
            setCarts([...carts, {
                title: product.text,
                size: product.size,
                color:product.color,
                material: product.material,
                qunatity: 1,
                price: product.price,
                id: product.id,
                img: product.img
            }])
        }
        else
        setCarts(
            carts.map(cart => cart.id === product.id ? { ...cart, qunatity: cart.qunatity+1 } : cart)
        )
    }
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
                    // alert('product is added to the cart')
                }}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product
