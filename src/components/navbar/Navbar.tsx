//Dependencies
import './Navbar.css';
import { NavLink } from "react-router-dom";

//img
import logo from '/library_logo.png';

const Navbar = () => {
    return(
        <nav>
            <NavLink to='/'><img src={logo} alt="logo"/></NavLink>
            <div className="options">
                <NavLink className="navOption" to={'/about'}>About</NavLink>
                <NavLink className="navOption" to={'/books'}>Books</NavLink>
                <NavLink className="navOption" to={'/profile'}>Profile</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;