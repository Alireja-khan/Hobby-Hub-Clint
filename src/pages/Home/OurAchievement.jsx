import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import { FaTag, FaUsers, FaLayerGroup, FaCalendarCheck } from 'react-icons/fa';

const OurAchievement = () => {
    return (
        <section className="py-16 px-6 sm:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Our Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                        <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900">
                            <CountUp end={1200} duration={5} />+
                        </h3>
                        <p className="text-gray-600 mt-2 text-lg">Active Members</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                        <FaLayerGroup className="text-5xl text-purple-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900">
                            <CountUp end={75} duration={5} />+
                        </h3>
                        <p className="text-gray-600 mt-2 text-lg">Hobby Groups</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                        <FaCalendarCheck className="text-5xl text-green-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900">
                            <CountUp end={320} duration={5} />+
                        </h3>
                        <p className="text-gray-600 mt-2 text-lg">Successful Events</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAchievement;