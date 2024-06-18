import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import JobOpportunities from './JobOpportunities';
import Home from '../../src/pages/Home';

const Layout = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Home />
      </main>
      <JobOpportunities/>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
