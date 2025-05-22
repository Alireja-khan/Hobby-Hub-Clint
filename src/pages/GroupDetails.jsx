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
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto bg-white shadow-xl rounded-2xl mt-10">
            <Toaster position="top-right" />

            <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg mb-6"
            />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-800 mb-6">
                {group.groupName}
            </h1>

            <div className="bg-white rounded-xl shadow hover:shadow-2xl transition p-4 sm:p-6 text-gray-700 text-base">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mb-4">
                    <div>
                        <p className="flex mb-2 items-center gap-2">
                            <FaTag />
                            <span className="font-semibold">Category:</span> {group.hobbyCategory}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaUsers />
                            <span className="font-semibold">Max Members:</span> {group.maxMembers}
                        </p>
                    </div>

                    <div>
                        <p className="flex mb-2 items-center gap-2">
                            <FaMapMarkerAlt />
                            <span className="font-semibold">Location:</span> {group.location}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <span className="font-semibold">Start Date:</span> {group.startDate}
                        </p>
                    </div>
                </div>

                <div className="border-t pt-4">
                    <p className="font-semibold mb-1">Description:</p>
                    <p className="text-sm text-gray-600">{group.description}</p>
                </div>
            </div>

            {/* Join Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={handleJoin}
                    className="w-full sm:w-auto hover:shadow-2xl border text-base sm:text-lg font-semibold py-3 px-8 rounded-xl shadow transition duration-300"
                >
                    Join Group
                </button>
            </div>
        </div>
    );
};

export default GroupDetails;
