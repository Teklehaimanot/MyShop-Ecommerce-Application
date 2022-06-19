import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import Cart from './cart/Cart';
const Header = () => {
    const [popupCart, setPopupCart] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['header'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    const onToggle = () => {
        setPopupCart(!popupCart)
    }

    return (
        <div className={navbarClasses.join(" ")}>
            <a className='header-logo' href="">My-Shop</a>
            <ul className='header-list'>
                <Link to="/">HOME</Link>
                <a href="">AbOUT</a>
                <a href="">CONTACT</a>
            </ul>
            <div className='header-cart'>
                <FaSearch />
                <span></span>
                <Link className='login' to="/login">LOGIN</Link>
                <span></span>
                <Cart onToggle={onToggle} popupCart={popupCart} />

            </div>
        </div>
    )
}

export default Header
