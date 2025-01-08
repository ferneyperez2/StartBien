import React, { useState } from 'react';
import './Servicio.css';
// Componente Dropdown
const DropdownLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú desplegable
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
       Nuestros servicios
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="#" className='links'>Fisioterapia 
            </a></li>
            <li><a href="#" className='links'>Terapia respiratoria</a></li>
            <li><a href="#" className="links">Fonodiomogia </a></li>
            <li><a href="#" className='links'> Psicologia</a></li>


          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownLink;
