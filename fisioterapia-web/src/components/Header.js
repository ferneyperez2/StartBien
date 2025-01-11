import React from 'react';
import { Link } from 'react-router-dom';

function Header ()  {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> Contacto</Link></li>
          <li><Link to="/contact">Servicios</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;