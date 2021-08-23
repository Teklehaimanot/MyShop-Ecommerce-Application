import { FaSearch } from 'react-icons/fa';
import{FaShoppingCart} from 'react-icons/fa';
import './Header.scss'
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
                <a href="">CART(0) <i > <FaShoppingCart/> </i></a>

              
            </div>
        </div>
    )
}

export default Header
