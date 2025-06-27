import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Successfully logged out");
                navigate('/login');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const location = useLocation();

    const routes = [
        { to: '/', label: 'Home' },
        { to: '/allGroups', label: 'All Groups' },
        { to: '/aboutUs', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
        { to: '/support', label: 'Support' },
        { to: '/createGroup', label: 'Create Group', auth: true },
        { to: '/myGroup', label: 'My Groups', auth: true },
        { to: '/dashboard', label: 'Dashboard', auth: true },
    ];

    const navLinks = (
        <div className="relative flex flex-col lg:flex-row gap-2 lg:gap-4">
            {routes.map(({ to, label, auth }) => {
                if (auth && !user) return null;
                const isActive = location.pathname === to;

                return (
                    <div key={to} className="relative">
                        {isActive && (
                            <motion.div
                                layoutId="active-nav"
                                className="absolute shadow-md inset-0 bg-blue-100 rounded-lg z-0"
                                transition={{ type: 'spring', stiffness: 600, damping: 100 }}
                            />
                        )}
                        <NavLink
                            to={to}
                            className="relative hover:bg-blue-50 z-10 px-3 py-2 rounded-lg font-semibold transition-colors duration-300"
                        >
                            {label}
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );


    // Primary-Color #669CD8
    // Secondary-Color #BFDBFE

    return (
        <div className="navbar bg-white shadow-md px-15 sticky top-0 z-50 flex flex-wrap items-center justify-between">

            <div className="navbar-start flex items-center justify-between w-full lg:w-auto">

                <div className='flex justify-center items-center'>
                    <Link to='/'><img src="https://i.ibb.co/xQT91X3/puzzle-1.png" className='w-10 h-10' alt="" /></Link>
                    <Link to="/" className="text-2xl font-bold rounded-lg p-3 transition">
                        HobbyHub
                    </Link>
                </div>


                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>


            <div className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:flex navbar-center`}>
                <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-4 lg:mt-0">
                    {navLinks}
                </ul>
            </div>


            <div className={`w-full lg:w-auto ${isMenuOpen ? 'block mt-4' : 'hidden'} lg:flex lg:items-center navbar-end`}>
                {user ? (
                    <div className="relative group dropdown-end">
                        <div
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                {user.photoURL && (
                                    <img src={user.photoURL} alt="Profile" className="object-cover w-full h-full" />
                                )}
                            </div>
                        </div>

                        <ul className="absolute right-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-lg ring-1 ring-gray-200 p-3 z-[1] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                            <li className="mb-3 border-b pb-2">
                                <p className="text-sm font-medium">{user.displayName}</p>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogOut}
                                    className="w-full text-left px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-2 mr-2">
                        <Link to="/login" className="btn btn-sm">Login</Link>
                        <Link to="/register" className="btn btn-sm">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
