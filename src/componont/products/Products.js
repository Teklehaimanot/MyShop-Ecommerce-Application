import './Products.scss'
import Product from './product/Product'
const Products = ({ products }) => {
    return (

        <div className='product-list'>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }


        </div>
    )
}

export default Products
