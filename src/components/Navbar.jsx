import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FiMenu, FiX } from 'react-icons/fi';

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

    const navLinks = (
        <>
            <NavLink className="px-3 py-2 rounded-lg hover:shadow-lg transition font-semibold" to="/">Home</NavLink>
            <NavLink className="px-3 py-2 rounded-lg hover:shadow-lg transition font-semibold" to="/allGroups">All Groups</NavLink>
            <NavLink className="px-3 py-2 rounded-lg hover:shadow-lg transition font-semibold" to="/createGroup">Create Group</NavLink>
            <NavLink className="px-3 py-2 rounded-lg hover:shadow-lg transition font-semibold" to="/myGroup">My Groups</NavLink>
        </>
    );

    return (
        <div className="navbar bg-white shadow-md px-4 sticky top-0 z-50 flex flex-wrap items-center justify-between">
            {/* Left Logo */}
            <div className="navbar-start flex items-center justify-between w-full lg:w-auto">
                <Link to="/" className="text-2xl font-bold rounded-lg p-3 hover:shadow-lg transition">
                    HobbyHub
                </Link>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Center Links */}
            <div className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:flex navbar-center`}>
                <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-4 lg:mt-0">
                    {navLinks}
                </ul>
            </div>

            {/* Right Avatar or Auth Buttons */}
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
