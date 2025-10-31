import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Card from '../../Components/SubscriptionCard/Card';
import DashBoard from '../../Pages/DashBoard/DashBoard';

const DashLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <DashBoard></DashBoard>
            <Footer></Footer>
        </div>
    );
};

export default DashLayout;