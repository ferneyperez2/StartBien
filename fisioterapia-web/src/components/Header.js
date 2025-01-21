import React from 'react';
import { Link } from 'react-router-dom';

function Header ()  {
  return (
    <div> 

    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> Contacto</Link></li>
          <li><Link to="/contact">Ser</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;