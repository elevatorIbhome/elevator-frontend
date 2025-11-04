import React, { use } from 'react';

import { useState } from 'react';
import { FaUser, FaSignOutAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';


const DashBoard = () => {
    const [activeTab, setActiveTab] = useState('memberships');
    const { logOut } = use(AuthContext)
    const navigate = useNavigate()

    const tabs = [
        { id: 'memberships', label: 'Memberships', to: "/dashboard" },
        { id: 'history', label: 'History', to: "/dashboard/history" },
        { id: 'profile', label: 'Profile', to: "/dashboard/profile" },
        { id: 'downloads', label: 'Downloads', to: "/dashboard/downloads" },
    ];

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Logged Out!',
                    text: 'You have successfully logged out.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false, 
                    timerProgressBar: true     
                });
                navigate('/')
            })
    }
    return (
        <div className="min-h-screen py-8 my-10">
            <div className="md:max-w-7xl w-full lg:mx-auto">
                {/* User Avatar Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative">
                        {/* Avatar */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg ring-4 ring-white">
                            <HiUser className="w-12 h-12 text-white" />
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute inset-0 -m-4 pointer-events-none">
                            <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                            <div className="absolute top-2 right-1 w-2 h-2 bg-pink-500 rounded-full"></div>
                            <div className="absolute bottom-1 left-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="bg-gray-800 rounded-full p-1 flex items-center gap-1 shadow-lg flex-wrap justify-center">
                        {tabs.map((tab) => (
                            <NavLink to={`${tab.to}`}
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                    ? 'bg-white text-gray-900 shadow-md'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </NavLink>
                        ))}
                        <button className="ml-2 p-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all">
                            <FaSignOutAlt onClick={handleLogOut} className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* out let */}
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;