import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GroupDetails = () => {
    const group = useLoaderData();
    console.log(group);

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <img src={group.imageUrl} alt={group.groupName} className="w-full h-64 object-cover rounded mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{group.groupName}</h1>
            <p><strong>Hobby:</strong> {group.hobbyCategory}</p>
            <p><strong>Location:</strong> {group.location}</p>
            <p><strong>Max Members:</strong> {group.maxMembers}</p>
            <p><strong>Start Date:</strong> {group.startDate}</p>
            <p><strong>Description:</strong> {group.description}</p>
        </div>
    );
};

export default GroupDetails;
