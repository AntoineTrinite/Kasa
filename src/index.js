import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Router>
    <Route path="/" component={App} />
  </Router>
);
