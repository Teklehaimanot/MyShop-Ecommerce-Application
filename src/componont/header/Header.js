import { FaBeer } from 'react-icons/fa';
import './Header.scss'
const Header = () => {
    return (
        <div className="header">
            <a className='header-logo' href="">Embish</a>
            <ul className='header-list'>
                <a href="">HOME</a>
                <a href="">AbOUT</a>
                <a href="">CONTACT</a>
                <FaBeer />
            </ul>
        </div>
    )
}

export default Header
