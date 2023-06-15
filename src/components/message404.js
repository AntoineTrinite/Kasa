import React from 'react';
import { Link } from 'react-router-dom';

const Message404 = () => {
  return (
    <div className='main-container'>
      <span className='error404'>404</span>
      <p className='text404'>Oups ! La page que vous demandez n'existe pas.</p>
      
      <Link className='link' to="./">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Message404

