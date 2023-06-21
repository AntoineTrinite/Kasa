import React from 'react';
import Collapse from './CollapseLogement';
import { useParams } from 'react-router-dom';
import data from '../logementData.json';
import '../styles/collapseRow.css';

// import starEmpty from '../images/star-empty.svg';
// import starPlain from '../images/star-plain.svg';
const CollapseRow = () => {
  const { id } = useParams();
  const cardData = data.find((item) => item.id === id);
  
  return (
    <div className='collapse-row'>
        <Collapse className="collapse-logement collapse-right" title="Description" text={cardData.description} />
        <Collapse className="collapse-logement collapse-left" title="Équipements">
          {cardData.equipments.map((equipment, index) => (
            <p className='collapse-text' key={index}>{equipment}</p>
          ))}
        </Collapse>
      </div>
  );
};

export default CollapseRow;