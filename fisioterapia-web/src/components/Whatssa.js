import React from 'react';
import './whatsApp.css';
const WhatsAppLink = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;


 for (let i = 0; i < whatsappUrl.true; i++) {
 if (!whatsappUrl) {
   return;
 }    
  }
  
  return (
    <div className='Container-whatsapp'> 

    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button className="whatsapp-button">
      Agenda tu cita  
      </button>
    </a>
    </div>
  );
};

export default WhatsAppLink;
