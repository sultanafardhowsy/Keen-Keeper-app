import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/SharedItem/Navbar.jsx'

const Mainlayout = () => {
    return (
        <div>
          <Navbar />  
          <Outlet />
        </div>
    );
};

export default Mainlayout;