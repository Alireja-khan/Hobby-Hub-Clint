import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaTag } from "react-icons/fa";
import { Toaster, toast } from 'sonner';

const GroupDetails = () => {
    const group = useLoaderData();

    const handleJoin = () => {

        toast.success('You have joined the group!');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-2xl mt-10">

            <Toaster position="top-right"  />

            <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-72 object-cover rounded-lg mb-6"
            />

            <h1 className="text-6xl text-center font-bold text-gray-800 mb-4">{group.groupName}</h1>

            <div className="bg-white rounded-xl shadow hover:shadow-2xl transition p-6  text-gray-700 text-base max-w-xl mx-auto">

                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <p className="flex mb-2 items-center gap-2"><FaTag /> <span className="font-semibold">Category:</span> {group.hobbyCategory}</p>
                        <p className="flex items-center gap-2"><FaUsers /> <span className="font-semibold">Max Members:</span> {group.maxMembers}</p>
                    </div>

                    <div>
                        <p className="flex mb-2 items-center gap-2"><FaMapMarkerAlt /> <span className="font-semibold">Location:</span> {group.location}</p>
                        <p className="flex items-center gap-2"><FaCalendarAlt /> <span className="font-semibold">Start Date:</span> {group.startDate}</p>
                    </div>
                </div>

                <div className="divider mb-1"></div>

                <div>
                    <p className="font-semibold mb-1">Description:</p>
                    <p className="text-sm text-gray-600">{group.description}</p>
                </div>
            </div>

            {/* Join Button */}
            <div className="mt-10 text-center">
                <button
                    onClick={handleJoin}
                    className=" hover:shadow-2xl border text-lg font-semibold py-3 px-8 rounded-xl shadow transition duration-300"
                >
                    Join Group
                </button>
            </div>
        </div>
    );
};

export default GroupDetails;
