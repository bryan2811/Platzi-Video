import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (

  <header className='header'>

    <Link to='/'>
      <img tabIndex='0' className='header__img' src={logo} alt='Platzi Video' />
    </Link>

    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User' />
        <p tabIndex='0'>Perfil</p>
      </div>

      <div>
        <ul>
          <li><a tabIndex='0' href='/'>Cuenta</a></li>
          <li>
            <Link to='/login'>
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>

    </div>
  </header>
);

export default Header;
