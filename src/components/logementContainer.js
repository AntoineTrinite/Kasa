import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import Gallerie from './Gallerie';
import InfoSection from './InfoSection';
import CollapseRow from './CollapseRow';

import data from '../logementData.json';

const LogementContainer = () => {
  const { id } = useParams();
  const cardData = data.find((item) => item.id === id);

  if (!cardData) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <Gallerie />
      <InfoSection />
      <CollapseRow />
    </div>
  );
};

export default LogementContainer;
