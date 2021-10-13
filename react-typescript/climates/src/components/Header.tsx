import React from 'react';

type Props = {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <nav className="nav-wrapper light-blue darken-2">
            <a href="#!" className="brand-logo">{ title }</a>
        </nav>
    );
}

export default Header;