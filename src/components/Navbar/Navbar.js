import { NavLink } from 'react-router-dom';
import './style.scss';

const navbar = () => (
    <nav>
        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
        <NavLink to="/contact">
            Contact
        </NavLink>
    </nav>
)

export default navbar