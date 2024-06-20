import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useThemeContext } from '../Context/ThemeContext';

const Layout = () => {
  const { state, dispatch } = useThemeContext();
  return (
    <div id='layout'>
      <Navbar />
      <div id='main-content' className={`main-content ${state.theme}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
