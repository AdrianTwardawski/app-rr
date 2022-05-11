import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route path="/" element={
          <p>Jesteś <span> na stronie głównej</span></p>
        } />
        <Route path="/products" element={
          <p>Jesteś <span> na stronie produkty</span></p>
        } />
        <Route path="/contact" element={
          <p>Jesteś <span> na stronie kontakt </span></p>
        } />
      </Routes>
    </div >
  );
}

export default Footer;
