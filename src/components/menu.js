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

            <li><a href="https://twentyfourg-interview.herokuapp.com" rel="noopener noreferrer" target="_blank">Video Player</a></li>
            <li><a href="https://versa-chat.firebaseapp.com/" rel="noopener noreferrer" target="_blank">Vue Chat</a></li>
            <li><a href="https://versa-crypto.herokuapp.com/" rel="noopener noreferrer" target="_blank">Crypto Tracker</a></li>
            <li><a href="https://steve-smart-brain.herokuapp.com" rel="noopener noreferrer" target="_blank">SmartBrain App</a></li>
            <li><a href="/natours/index.html" rel="noopener noreferrer" target="_blank">Natours</a></li>
            <li><a href="./trillo/index.html" rel="noopener noreferrer" target="_blank">Trillo</a></li>
            <li><a href="./nexter/index.html" rel="noopener noreferrer" target="_blank">Nexter</a></li>
            <li><a href="./candy/index.html" rel="noopener noreferrer" target="_blank">Museum of Candy</a></li>
            <li><a id="game" href="./colorgame/colorgame.html" rel="noopener noreferrer" target="_blank">JavaScript Color Game</a></li>
            
        </ul>
    </div>
)

export default Menu