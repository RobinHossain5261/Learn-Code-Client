import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../images/learn-logo.jpg';
import { UserIcon } from '@heroicons/react/24/solid';

const Header = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-gray-100 lg:px-16" >
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
                                {
                                    user?.uid ?
                                        <>
                                            <Link to='/profile'><img className='w-12 h-12 rounded-full	 mr-2' src={user?.photoURL ? user?.photoURL : <UserIcon />} alt="" /></Link>
                                            <Link onClick={handleLogOut} className="btn btn-outline btn-info mr-2">Log Out</Link>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className="btn btn-outline btn-info mr-2">Login</Link>
                                            <Link to='/register' className="btn btn-outline btn-info">Register</Link>
                                        </>
                                }
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center	'>
                        <img className='w-16 h-16 rounded-full' src={logo} alt="" />
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
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle toggle-info" />
                        </label>
                    </div>
                    {
                        user?.uid ?
                            <>
                                <Link to='/profile'><img className='w-12 h-12 rounded-full	 mr-2' src={user?.photoURL ? user?.photoURL : <UserIcon />} alt="" /></Link>
                                <Link onClick={handleLogOut} className="btn btn-outline btn-info mr-2">Log Out</Link>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn btn-outline btn-info mr-2">Login</Link>
                                <Link to='/register' className="btn btn-outline btn-info">Register</Link>
                            </>
                    }

                </div>

            </div>
        </div>
    );
};

export default Header;