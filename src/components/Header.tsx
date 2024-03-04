import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
