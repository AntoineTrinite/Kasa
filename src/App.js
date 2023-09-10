import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Logements from './pages/Logement';
import Propos from './pages/Propos';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/propos" element={<Propos />} />
        {/* 404 error page */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
