import React, { useState } from 'react';
import '../styles/collapse.css';
import upVector from '../images/up-vector.svg';

function Collapse({ title, text }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className='collapse' onClick={handleToggle}>
      <div className='collapse-header'>
        <span className='collapse-title'>{title}</span>
        <img
          className={`direction-vector ${show ? 'rotate' : ''}`}
          src={upVector}
          alt="close collapse"
          aria-label='close collapse'
        />
      </div>

      {show ? <p className='collapse-text'>{text}</p> : null}
    </div>
  );
}

export default Collapse;
