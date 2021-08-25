const Product = ({product}) => {
    return (
        <div className='single-product-box'>
            <div className='product-img' style={{
                backgroundImage: `url(${product.img})`
            }} ></div>
            <div className='product-content' >
                <span>{product.text}</span>
                <p> {`$${product.price}`} </p>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product
