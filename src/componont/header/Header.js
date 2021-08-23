import { FaSearch } from 'react-icons/fa';
import './Header.scss'
import Cart from './cart/Cart';
const Header = () => {
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
                <a href="">LOGIN</a>
                <span></span>
                <Cart/>
                
            </div>
        </div>
    )
}

export default Header
