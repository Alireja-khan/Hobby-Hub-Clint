import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const link = <>
        <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10  transition font-semibold" to={"/"}>Home</NavLink>
        <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10  transition font-semibold" to={"/allGroups"}>All Groups</NavLink>
        <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10  transition font-semibold" to={"/createGroup"}>Create Group</NavLink>
        <NavLink className="px-3 py-2 rounded-lg hover:bg-[#2a2e37]/10  transition font-semibold" to={"/myGroup"}>My Groups</NavLink>
    </>;

    return (
        <div className="navbar bg-white shadow-md px-4 sticky top-0 z-50">

            <div className="navbar-start">
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl rounded-lg p-3 font-bold hover:bg-[#2a2e37]/10 ">HobbyHub</span>
                </Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4 items-center">
                    {link}
                </ul>
            </div>


            <div className="navbar-end gap-2">

                
                <Link to='/login'><button className='btn'>Login</button></Link>
                <Link to='/register'><button className='btn'>Register</button></Link>

                <div className="avatar hidden sm:inline-block">

                    

                </div>
            </div>
        </div>
    );
};

export default Navbar;
