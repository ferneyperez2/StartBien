
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'schedule':
        return <Schedule />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setActiveSection('home')}>Inicio</button>
      <button onClick={() => setActiveSection('services')}>Servicios</button>
      <button onClick={() => setActiveSection('contact')}>Contacto</button>
      <button onClick={() => setActiveSection('schedule')}>Agendar Cita</button>
    </nav>
  );
};

const Home = () => (
  <div className="section">
    <h1>Bienvenido a la Clínica de Fisioterapia</h1>
    <p>Ofrecemos servicios especializados para tu bienestar físico.</p>
  </div>
);

const Services = () => (
  <div className="section">
    <h1>Servicios</h1>
    <ul>
      <li>Terapia Física</li>
      <li>Rehabilitación Deportiva</li>
      <li>Masajes Terapéuticos</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="section">
    <h1>Contacto</h1>
    <p>Email: fisioterapia@correo.com</p>
    <p>Teléfono: +123 456 7890</p>
  </div>
);

const Schedule = () => (
  <div className="section">
    <h1>Agendar Cita</h1>
    <form>
      <label>
        Nombre:
        <input type="text" />
      </label>
      <label>
        Fecha:
        <input type="date" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  </div>
);

export default App;
