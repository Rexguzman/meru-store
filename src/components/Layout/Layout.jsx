import React from 'react';
import { GlobalStyles } from '../../style/global';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
