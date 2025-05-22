import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AllGroups = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/groups?creatorEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setGroups(data);
                });
        }
    }, [user]);

    return (
        <div className="p-6">
            <h1 className="text-3xl mt-10 font-bold text-center text-gray-800">All Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {groups.map(group => (
                    <div key={group._id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={group.imageUrl} alt={group.groupName} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-xl font-semibold mt-2">{group.groupName}</h2>
                        <p className="text-gray-600">{group.hobbyCategory}</p>
                        <p className="text-gray-500 text-sm">{group.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllGroups;
