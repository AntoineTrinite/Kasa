import React, { useState } from 'react';
import '../styles/collapse.css';
import upVector from '../images/up-vector.svg';

function Collapse({ title, text }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className='collapse-normal' onClick={handleToggle}>
      <div className='collapse-header-normal'>
        <span className='collapse-title-normal'>{title}</span>
        <img
          className={`direction-vector ${show ? 'rotate' : ''}`}
          src={upVector}
          alt="close collapse"
          aria-label='close collapse'
        />
      </div>

      {show ? <p className='collapse-text-normal'>{text}</p> : null}
    </div>
  );
}

export default Collapse;
