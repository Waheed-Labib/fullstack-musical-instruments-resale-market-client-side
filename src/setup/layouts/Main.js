import React from 'react';
import Navbar from 'pages-and-components/shared-sections/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from 'pages-and-components/shared-sections/footer/Footer';

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;