import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
    
    <header className="header">
        <img tabIndex="0" className="header__img" src={logo} alt="Platzi Video" />

        <div className="header__menu">
            
            <div className="header__menu--profile">
                <img src={userIcon} alt="User" />
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