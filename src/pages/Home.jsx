import React, { useEffect, useState } from 'react';
import { GoGoal } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';



const Home = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featured-groups')
            .then(res => res.json())
            .then(data => setGroups(data));
    }, []);

    return (



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">





            <div className="relative bg-gradient-to-r from-gray-100 to-gray-300 min-h-[600px] px-6 py-20 rounded-b-3xl shadow-xl overflow-hidden">


                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div
                        className="absolute inset-0 bg-[url('https://i.ibb.co/5Wwmjy0s/Group-therapy-cuate.png')] bg-cover bg-center opacity-40"
                    ></div>
                </div>


                <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-15 mt-20 drop-shadow-2xl flex flex-col items-center justify-center gap-2">
                        <span>
                            <Typewriter
                                words={['Discover Exciting Hobby Groups', 'Find Your Passion', 'Join the Fun']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={40}
                                delaySpeed={1500}
                            />
                        </span>
                        <span className='flex items-center gap-3 text-blue-300'>
                            Near You <GoGoal />
                        </span>
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






            <h2 className="text-4xl mt-20 font-extrabold     text-center text-gray-800 mb-12">Featured Hobby Groups</h2>
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




            <section className=" py-20 px-6 mt-10 sm:px-10 lg:px-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">


                        <Fade direction="up" delay={100}>
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                                <h3 className="text-2xl font-semibold mb-3 text-blue-600">1. Sign Up</h3>
                                <p className="text-gray-600">Create your free account and build your profile to get started.</p>
                            </div>
                        </Fade>


                        <Fade direction="up" delay={100}>
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                                <h3 className="text-2xl font-semibold mb-3 text-purple-600">2. Join Groups</h3>
                                <p className="text-gray-600">Browse our hobby groups and join the ones that match your interests.</p>
                            </div>
                        </Fade>


                        <Fade direction="up" delay={100}>
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                                <h3 className="text-2xl font-semibold mb-3 text-pink-600">3. Start Exploring</h3>
                                <p className="text-gray-600">Attend events, participate in discussions, and share your journey.</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>







            <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                    Welcome to our hobby community! We connect like-minded individuals through shared interests —
                    whether it's art, coding, photography, or gaming. Join us to learn, collaborate, and have fun with others who share your passion.
                </p>
            </section>






        </div>



    );
};

export default Home;
