import React,{ useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavVisible,setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                    <span>Mindmosaic</span>
                </Link>
            </div>

            <button className="navbar__toggle" onClick={toggleNav}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <ul className={`navbar__links ${isNavVisible ? 'active' : ''}`}>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;