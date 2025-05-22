import React, { useEffect, useState } from 'react';
import { GoGoal } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Home = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featured-groups')
            .then(res => res.json())
            .then(data => setGroups(data));
    }, []);

    return (



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="relative bg-gradient-to-r from-gray-100 to-gray-300 py-20 px-6 rounded-b-3xl shadow-xl overflow-hidden">

                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div
                        className="absolute inset-0 bg-[url('https://i.ibb.co/5Wwmjy0s/Group-therapy-cuate.png')] bg-cover bg-center opacity-40"
                    ></div>
                </div>


                <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-2xl flex items-center justify-center gap-2 flex-wrap">
                        Discover Exciting Hobby Groups
                        <br /> <span className='flex justify-center items-center gap-5'>Near You <GoGoal /></span>
                    </h1>

                    <p className="text-lg sm:text-xl font-medium mb-8 drop-shadow-md">
                        Join like-minded people and explore your passions — from painting to gaming, there's a group for everyone.
                    </p>
                    <Link to="/allGroups">
                        <button className="bg-white hover:bg-blue-200 text-black font-bold py-3 px-6 rounded-xl shadow-md transition duration-300 ease-in-out">
                             Browse Groups
                        </button>
                    </Link>
                </div>
            </div>



            {/* // Featured Hobby Groups Section // */}

            <h2 className="text-4xl mt-10 font-bold text-center text-gray-800 mb-12">Featured Hobby Groups</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {groups.map(group => (
                    <div
                        key={group._id}
                        className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src={group.imageUrl}
                            alt={group.groupName}
                            className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="p-6 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {group.groupName}
                                </h3>
                                <p className="text-sm font-medium mb-2">
                                    Category: {group.hobbyCategory}
                                </p>
                                <p className="text-gray-600 text-sm mb-5 ">
                                    {group.description}
                                </p>
                                <Link to={`/groupDetails/${group._id}`}>
                                    <button className="bg-gray-100 w-full hover:bg-blue-200 text-black font-bold py-3 px-6 rounded-xl shadow-md transition duration-300 ease-in-out">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    );
};

export default Home;
