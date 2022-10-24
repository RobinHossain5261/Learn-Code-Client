import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/learn-logo.jpg';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-100 lg:px-24" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>

                            <div className='lg:hidden'>
                                <Link to='/login' className="btn btn-outline btn-info mr-2">Login</Link>
                                <Link to='/register' className="btn btn-outline btn-info">Register</Link>
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center	'>
                        <img className='w-16 h-16 rounded-xl' src={logo} alt="" />
                        <Link className="btn btn-ghost normal-case text-3xl ">Learn <span className='text-info'>-Code</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>

                    </ul>
                </div>
                <div className="navbar-end lg:flex hidden">
                    <Link to='/login' className="btn btn-outline btn-info mr-2">Login</Link>
                    <Link to='/register' className="btn btn-outline btn-info">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;