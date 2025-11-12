import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Homepage from '../pages/Homepage';


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default MainLayout;