import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cards.css';
import data from '../logementData.json';

const Cards = () => {
  return (
    <div className='card-container'>
      <div className='card-box'>
        {data.map((item) => (
          <Link to={`/logements/${item.id}`} key={item.id} className='card-box'>
            <div className='card'>
              <img className='card-cover' src={item.cover} alt='cover' />
              <div className='card-overlay'></div>
              <span className='card-title'>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
