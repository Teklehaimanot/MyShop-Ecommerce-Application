import { useContext } from "react"
import CartProvider, { cartContext } from "../../../context/CartProvider"
const Product = ({ product }) => {
    const { carts, setCarts } = useContext(cartContext)

    const addToCart = () => {
        setCarts([...carts, {
            title: product.text,
            size: product.size,
            qunatity: 1,
            price: product.price,
            id: product.id,
            img: product.img
        }])
    }
    return (
        <div className='single-product-box'>
            <div className='product-img' style={{
                backgroundImage: `url(${product.img})`
            }} ></div>
            <div className='product-content' >
                <span>{product.text}</span>
                <p> {`$${product.price}`} </p>
                <button onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product
