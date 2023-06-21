import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Logements from './Logement';
import Propos from './Propos';
import Error404 from './Error404';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/propos" element={<Propos />} />
        {/* 404 error page */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
