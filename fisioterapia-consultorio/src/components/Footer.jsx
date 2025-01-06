// /components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 Consultorio de Fisioterapia. Todos los derechos reservados.</p>
    </FooterContainer>
  );
}

export default Footer;
