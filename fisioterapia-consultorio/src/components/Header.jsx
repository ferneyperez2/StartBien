// /components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #005a87;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Nav = styled.nav`
  margin-top: 1rem;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.2rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Consultorio de Fisioterapia</h1>
      <Nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
