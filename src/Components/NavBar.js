import logo from '../Img/Logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import '../style/Navbar.css'

export default function NavBar() {

    const Menu_isClicked = false;

    return <nav className="NavBar">
        <ul className='Logo'>
            <img src={logo} alt=''/>
            <h1>ÔNG BẦU CAFE</h1>
        </ul> 
        <ul className='Tools'>
            <ul className='Menu'>{Menu_isClicked ? <FaChevronDown /> : <HiOutlineMenuAlt4 />}</ul>
            <ul className='Search'><IoSearchOutline /> </ul>
        </ul>
    </nav>
};