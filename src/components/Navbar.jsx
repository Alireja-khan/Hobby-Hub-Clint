import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Successfully logged out");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLinks = (
        <>
            <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10 transition font-semibold" to="/">Home</NavLink>
            <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10 transition font-semibold" to="/allGroups">All Groups</NavLink>
            <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10 transition font-semibold" to="/createGroup">Create Group</NavLink>
            <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10 transition font-semibold" to="/myGroup">My Groups</NavLink>
            <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10 transition font-semibold" to="/updateGroup">Update Group</NavLink>
        </>
    );

    return (
        <div className="navbar bg-white shadow-md px-4 sticky top-0 z-50">
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold rounded-lg p-3 hover:bg-[#2a2e37]/10">
                    HobbyHub
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4 items-center">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user.photoURL && (
                                    <img src={user.photoURL} alt="Profile" />
                                )}
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[1]"
                        >
                            <li className='mb-2'>
                                <p className="text-sm font-semibold">{user.displayName}</p>
                            </li>
                            <li>
                                <button onClick={handleLogOut} className="btn btn-sm">Log Out</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex gap-2 mr-2">
                        <Link to="/login" className="btn btn-sm">Login</Link>
                        <Link to="/register" className="btn btn-sm">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
