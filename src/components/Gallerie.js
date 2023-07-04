import React, { useState } from 'react';
import data from '../logementData.json';
import { useParams } from 'react-router-dom';
import '../styles/gallerie.css';
import leftArrow from '../images/gal-arrow-left.svg';
import rightArrow from '../images/gal-arrow-right.svg';

const Gallerie = () => {
  const { id } = useParams();
  const cardData = data.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const showGalleryControls = cardData.pictures.length > 1;

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cardData.pictures.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < cardData.pictures.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='gallerie'>
      <div className='images-gallerie'>
        <img className='image-gal' src={cardData.pictures[currentImageIndex]} alt={`gallerie-${currentImageIndex}`} />
        {showGalleryControls && ( // Condition pour afficher les éléments uniquement lorsque showGalleryControls est true
          <div className='chevrons'>
            {cardData.pictures.length > 1 && (
              <div className='chevrons-left'>
                <img className='nav-arrow left' src={leftArrow} alt='leftArrow' onClick={handlePrevImage} />
              </div>
            )}
            {cardData.pictures.length > 1 && (
              <div className='chevrons-right'>
                <img className='nav-arrow right' src={rightArrow} alt='rightArrow' onClick={handleNextImage} />
              </div>
            )}
          </div>
        )}
        <div className='gallerie-info'>
          {showGalleryControls && ( // Condition pour afficher l'élément uniquement lorsque showGalleryControls est true
            <span className='image-count'>{currentImageIndex + 1}/{cardData.pictures.length}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallerie;
