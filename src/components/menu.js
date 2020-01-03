import React from 'react';
import Link from 'gatsby-link';
import Logo from '../images/sglogo.png';
import './menu.css';

const Menu = () => (
    <div>
        <ul> 
            <li>
                <Link to="/">
                    <img src={Logo} alt="Logo" width="50" />
                </Link>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>
    </div>
)

export default Menu