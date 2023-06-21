import React from 'react';
import CollapseLogement from './CollapseLogement';
import { useParams } from 'react-router-dom';
import data from '../logementData.json';
import '../styles/collapseRow.css';

const CollapseRow = () => {
  const { id } = useParams();
  const cardData = data.find((item) => item.id === id);

  return (
      <div className='collapse-row'>
        <CollapseLogement title="Description" content={cardData.description} />
        <CollapseLogement title="Équipements" content={cardData.equipments} />
      </div>
  );
};

export default CollapseRow;