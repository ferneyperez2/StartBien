import React from 'react';
import WhatsAppLink from './components/Whatsapp';

const Home= () => {
  return (
    <div className="home-container">
      <header>
        <h1>Consultorio de Fisioterapia</h1>
        <p>Recupera tu bienestar con los mejores tratamientos.</p>
      </header>

      <section className="services">
        <h2>Servicios</h2>
        <ul>
          <li>Rehabilitación de lesiones</li>
          <li>Terapias de dolor crónico</li>
          <li>Masajes terapéuticos</li>
          <li>Ejercicios de fortalecimiento</li>
        </ul>
      </section>

      <section className="contact">
        <h2  >Agenda tu cita </h2>
        <WhatsAppLink phoneNumber="3122845333" /> 
      </section>
    </div>
  );
};

export default Home;
