import React from 'react';

const Header = () => {
    return(
        <header className="app-header">
            <p className="nombre-usuario"> Hola <span>Juan Pablo</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    );
}

export default Header;