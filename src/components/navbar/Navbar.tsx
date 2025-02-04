//Dependencies
import './Navbar.css';
import { NavLink } from "react-router-dom";

//img
import logo from '/library_logo.png';

const Navbar = () => {
    return(
        <nav>
            <img src={logo} alt="logo"/>
            <div className="options">
                <NavLink className="navOption" to={'/'}>About</NavLink>
                <NavLink className="navOption" to={'/'}>Books</NavLink>
                <NavLink className="navOption" to={'/'}>Profile</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;