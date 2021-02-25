import React from 'react';
import { StyledFooter } from './StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <figure>
          <img src="https://i.imgur.com/1XVP9fa.png" alt="Logo Pan Merú" />
        </figure>
        <div className="information">
          <p>Pan Merú © 2021</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
