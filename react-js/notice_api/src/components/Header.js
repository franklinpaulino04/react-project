import React from 'react';
import './Header.css';

const Header = ({ title }) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{ title }</a>
        </nav>
    );
}

export default Header;