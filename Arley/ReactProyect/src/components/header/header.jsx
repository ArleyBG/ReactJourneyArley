import React from 'react';
import './header.css';
import Carrito from '../carrito/carrito';

// Funciones
const Header = () => {

  // Renderizado
  return (
    <div className="header">
      <header className="App-header">
        <h1>Burger Grill</h1>
        <Carrito /> {/* Renderiza el componente */}
      </header>
    </div>
  );
};

export default Header;
