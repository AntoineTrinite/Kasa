import React from 'react';
import { Link } from 'react-router-dom';
import K from '../images/k.svg';
import A from '../images/a.svg';
import S from '../images/s.svg';
import A2 from '../images/a2.svg';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header-container'>
      
        <Link className='link-pages' to="/">
          <h1 className='header-tile'>
            <img className='letter-title' src={K} alt="K" aria-label='K' />
            <img className='letter-title' src={A} alt="A" aria-label='A' />
            <img className='letter-title' src={S} alt="S" aria-label='S' />
            <img className='letter-title' src={A2} alt="A" aria-label='A' />
          </h1>
        </Link>
      

      <nav className='nav-part'>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <Link className='link-pages home-active' to="/">Accueil</Link>
          </li>
          <li className='nav-li'>
            <Link className='link-pages propos-active' to="/propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
