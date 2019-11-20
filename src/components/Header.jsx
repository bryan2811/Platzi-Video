import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
    
    <header className="header">
        <img tabIndex="0" className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" />

        <div className="header__menu">
            
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt="User" />
                <p tabIndex="0">Perfil</p>
            </div>

            <div>
                <ul>
                    <li><a tabIndex="0" href="/">Cuenta</a></li>
                    <li><a tabIndex="0" href="/">Cerrar Sesión</a></li>
                </ul>
            </div>

        </div>
    </header>
);

export default Header;