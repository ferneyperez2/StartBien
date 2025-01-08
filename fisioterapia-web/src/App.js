// src/App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Servicio from './components/page/Servicios';
import Contacto from './components/page/Contacto';
import AgendarCita from './components/page/AgendarCita';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="services">
          <h2>Servicios</h2>
          <p>Aquí puedes agregar los servicios que ofreces como fisioterapeuta...</p>
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <p>Información de contacto para consultas...</p>
        </section>
        <section id="book">
          <h2>Agendar Cita</h2>
          <p>Formulario o enlace para agendar cita...</p>
        </section>
      </main>

      <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Contacto/>} />
          <Route path="/about" element={<Servicio/>} />
          <Route path="/contact" element={<AgendarCita />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
