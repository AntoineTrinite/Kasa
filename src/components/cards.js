import React from 'react';
import '../styles/cards.css';

const Cards = () => {
    return (
      <div className='card-container'>
        {/* ici les cartes */}
        <div className='card-box'>
            <div className='card'>
            <span className='card-title'>Titre de la location</span>
        </div>
        <div className='card'>
            <span className='card-title'>Titre de la location</span>
        </div>
        <div className='card'>
            <span className='card-title'>Titre de la location</span>
        </div>
        <div className='card'>
            <span className='card-title'>Titre de la location</span>
        </div>
        <div className='card'>
            <span className='card-title'>Titre de la location</span>
        </div>
        </div>
        
      </div>
    );
  };
  
  export default Cards;
  