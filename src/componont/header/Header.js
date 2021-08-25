import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import './Header.scss'
import Cart from './cart/Cart';
const Header = () => {
    const [popupCart, setPopupCart] = useState(false);

    const onToggle = ()=>{
        setPopupCart(!popupCart)
    }


    console.log('tog', popupCart)
    return (
        <div className="header">
            <a className='header-logo' href="">Embish</a>
            <ul className='header-list'>
                <a href="">HOME</a>
                <a href="">AbOUT</a>
                <a href="">CONTACT</a>
            </ul>
            <div className='header-cart'>
                <FaSearch />
                <span></span>
                <a className='login' href="#">LOGIN</a>
                <span></span>
                <Cart  onToggle = {onToggle} popupCart = {popupCart}/>

            </div>
        </div>
    )
}

export default Header
