import React from 'react';
import '../styles/cards.css';
import data from '../logementData.json'

const Cards = () => {
    return (
      <div className='card-container'>
        {/* ici les cartes */}
        <div className='card-box'>
            {
                data.map( data => {
                    return(
                        <div className='card-boxes' key={data.id}>
                            <div className='card'>
                                <img className='card-cover' src={data.cover} alt="cover" />
                                <div className='card-overlay'></div>
                                <span className='card-title'>{ data.title }</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
      </div>
    );
  };
  
  export default Cards;
  