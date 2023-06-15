import React from 'react';
import '../styles/banner.css';
import bannerImage from '../images/banner-bg-2.png';


const BannerAPropos = () => {
    return (
      <div className='banner-container'>
        <img className='banner-image' src={bannerImage} alt="banner" />
      </div>
    );
  };
  
  export default BannerAPropos;
  