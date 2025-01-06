import React from 'react';


const WhatsAppLink = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button className="whatsapp-button">
        Contactar por WhatsApp
      </button>
    </a>
  );
};

export default WhatsAppLink;
