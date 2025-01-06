import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
// import { GlobalStyle } from './GlobalStyles';
const App = ()  => {
  return (
<Router>
      {/* <GlobalStyle /> */}
      <Header />
      
        <Route path="/" exact component={Inicio} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
   
      <Footer />
    </Router>
  );
};

export default App;


