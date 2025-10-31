import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li className='roboto'><NavLink to='/'  className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} > Home</NavLink></li>

        <li className='roboto'><NavLink to='/member'  className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >Membership Page</NavLink></li>

        <li className='roboto'><NavLink to='/about'  className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} > About</NavLink></li>

        <li className='roboto'><NavLink to='/contact'  className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >Contact</NavLink></li>

        <li className='roboto'><NavLink to='/news'  className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >Latest News</NavLink></li>
        <li className='roboto'><NavLink to='/dashboard'  className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >Demo DashBorad</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm rounder-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }

                    </ul>
                </div>
              <div className='w-16'>
                 <img src="/src/assets/logo.png" alt="" />
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a >text</a>
            </div>
        </div>
    );
};

export default Navbar;