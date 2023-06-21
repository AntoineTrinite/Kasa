import React, { useState } from 'react';
import '../styles/collapseLogement.css';
import upVector from '../images/up-vector.svg';

function CollapseLogement({ title, content }) {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className='collapse-list'>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <p className='collapse-text'>{content}</p>;
    }
  };

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={handleToggle}>
        <span className='collapse-title'>{title}</span>
        <img className={`direction-vector ${show ? 'rotate' : ''}`} src={upVector} alt="close collapse" aria-label='close collapse' />
      </div>

      {show && <div className='collapse-content'>{renderContent()}</div>}
    </div>
  );
}

export default CollapseLogement;