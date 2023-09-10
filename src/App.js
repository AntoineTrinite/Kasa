import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Logements from './pages/Logement';
import Propos from './pages/Propos';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/propos" element={<Propos />} />
        {/* 404 error page */}
      </Routes>
    </>
  );
};

export default App;
