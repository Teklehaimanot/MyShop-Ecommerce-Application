import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import Cart from './cart/Cart';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons';

const Header = () => {
    const [popupCart, setPopupCart] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

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
            <Link className='header-logo' to="/">ገበያ</Link>
            <IconContext.Provider value={{ size: 20 }}>
                <FaBars onClick={() => setIsNavExpanded(!isNavExpanded)} className='fa-bar' />
            </IconContext.Provider>
            <div className={isNavExpanded ? 'header-cart expanded' : 'header-cart'}>
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
