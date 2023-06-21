import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../logementData.json';
import starEmpty from '../images/star-empty.svg';
import starPlain from '../images/star-plain.svg';
import '../styles/infoSection.css';

const StarRating = ({ rating }) => {
  const MAX_RATING = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = MAX_RATING - fullStars - hasHalfStar;

  const renderStar = (type, key) => (
    <img key={key} className='star-icon' src={type} alt={`star-${type}`} />
  );

  return (
    <div className='rating-stars'>
      {[...Array(fullStars)].map((_, index) => renderStar(starPlain, index))}
      {hasHalfStar && renderStar(starPlain, fullStars)}
      {[...Array(emptyStars)].map((_, index) => renderStar(starEmpty, index + fullStars + hasHalfStar))}
    </div>
  );
};

const InfoSection = () => {
  const { id } = useParams();
  const cardData = data.find((item) => item.id === id);

  return (
    <div className='info-section'>
      <div className='first-part'>
        <h1 className='title-logement'>{cardData.title}</h1>
        <span className='location'>{cardData.location}</span>
        <ul className='tag-list'>
          {cardData.tags.map((tag, index) => (
            <li className='tags' key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className='second-part'>
        <div className='host'>
          <div className='host-name'>{cardData.host.name}</div>
          <img className='host-pic' src={cardData.host.picture} alt={'gallerie'} />
        </div>
        <StarRating rating={cardData.rating} />
      </div>
    </div>
  );
};

export default InfoSection;
