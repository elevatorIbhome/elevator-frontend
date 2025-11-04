import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import Loading from '../Components/LoadingComponents/Loading';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:max-w-7xl md:mx-auto w-full'>
                <Outlet></Outlet>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Root;