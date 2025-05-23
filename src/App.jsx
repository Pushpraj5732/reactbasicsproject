import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import LoginPage from './components/Login'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
