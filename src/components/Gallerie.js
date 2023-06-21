import React from 'react';
import data from '../logementData.json';
import { useParams } from 'react-router-dom';
import '../styles/gallerie.css';
import leftArrow from '../images/gal-arrow-left.svg';
import rightArrow from '../images/gal-arrow-right.svg';

const Gallerie = () => {

    const { id } = useParams();
    const cardData = data.find((item) => item.id === id);

    return (
        <div className='gallerie'>
            
            <div className='images-gallerie'>
            {cardData.pictures.map((picture, index) => (
                <img className='image-gal' src={picture} alt={`gallerie-${index}`} key={index} />
            ))}
            <div className='chevrons'>
                <div className='chevrons-left'><img className='nav-arrow left' src={leftArrow} alt='leftArrow'/></div>
                <div className='chevrons-right'><img className='nav-arrow right' src={rightArrow} alt='leftArrow'/></div>
            </div>
            </div>
        </div>
    );
  };
  
  export default Gallerie;
  