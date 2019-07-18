import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="nav">
            <div className="nav-inner-wrapper">
                <Link to="/" className="logo">Bit Blog</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header