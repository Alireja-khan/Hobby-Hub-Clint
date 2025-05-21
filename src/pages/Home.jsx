import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/featured-groups")
            .then(res => res.json())
            .then(data => setGroups(data));
    }, []);

    return (
        <div className="my-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Groups</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {groups.map(group => (
                    <div key={group._id} className="bg-white shadow-lg rounded-lg p-4 border hover:shadow-xl transition">
                        <img src={group.imageUrl} alt={group.groupName} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">{group.groupName}</h3>
                        <p className="text-sm text-gray-600">Category: {group.hobbyCategory}</p>
                        <p className="text-gray-700 mt-2 line-clamp-3">{group.description}</p>
                        
                        <Link to={`/groupDetails/${group._id}`}>
                            <button className='btn'>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
