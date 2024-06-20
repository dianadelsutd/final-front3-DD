import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div id='layout'>
      <Navbar />
      <div id='main-content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
