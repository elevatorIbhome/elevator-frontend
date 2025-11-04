import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user } = use(AuthContext);
    console.log(user)

    const links = <>
        <li className='roboto'><NavLink to='/' className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} > Home</NavLink></li>

        <li className='roboto'><NavLink to='/member' className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >Membership Page</NavLink></li>

        <li className='roboto'><NavLink to='/about' className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} > About</NavLink></li>

        <li className='roboto'><NavLink to='/contact' className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >Contact</NavLink></li>

        <li className='roboto'><NavLink to='/news' className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >Latest News</NavLink></li>
        {
            user && <li className='roboto'><NavLink to='/dashboard' className={({ isActive }) => isActive ? "active text-green-800 font-semibold border-b-2" : ""} >DashBorad</NavLink></li>
        }

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
            <div className="navbar-end gap-4">
                {
                    user ? (<Link to='/dashboard' className='flex items-center gap-3 flex-row-reverse'><FaUser className="md:w-10 md:h-10 w-8 h-8 text-white bg-blue-500 rounded-full"/><span className='md:font-semibold roboto text-green-500 text-sm md:text-xl'>Hello,{user.displayName}</span></Link>) : (<>
                        <Link to={'/login'} className="btn  roboto bg-[#00C853] hover:bg-[#00B140] text-white border-none rounded-lg flex items-center gap-2 px-6 py-3 font-medium">
                            Login
                        </Link>
                        <Link to='/signup' className="btn  roboto btn-primary border-none rounded-lg flex items-center gap-2 px-6 py-3 font-medium">
                            Sign Up
                        </Link>
                    </>)
                }
            </div>
        </div>
    );
};

export default Navbar;