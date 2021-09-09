import './CartView.scss'
const CartView = () => {
    return (
        <div className='cart-area'>
            <div className='cart-table-list'>
                <div className='cart-table-item'>
                    <div className='cart-table-col'>PRODUCT</div>
                    <div className='cart-table-col'>NAME</div>
                    <div className='cart-table-col'>UNIT PRICE</div>
                    <div className='cart-table-col'>QUANTITY</div>
                    <div className='cart-table-col'>TOTAL</div>
                </div>
                <div className='cart-table-item '>
                    <div className='cart-table-col cart-table-col-img'>
                        <div className='cart-table-col-img'></div>
                    </div>
                    <div className='cart-table-col'></div>
                    <div className='cart-table-col'></div>
                    <div className='cart-table-col'></div>
                    <div className='cart-table-col'></div>
                </div>
                <div className='cart-table-item'>
                    <div className='cart-table-col'>
                        <div className='cart-table-col-img'></div>
                    </div>
                    <div className='cart-table-col'></div>
                    <div className='cart-table-col'></div>
                    <div className='cart-table-col'></div>
                    <div className='cart-table-col'></div>
                </div>
            </div>

            {/* <div className='cart-button'>
                hey
            </div>

            <div className='cart-totals'>
                hey
            </div> */}
        </div>
    )
}

export default CartView
