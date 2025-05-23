
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useEffect, useState } from 'react';

const AllGroups = () => {

    const [groups, setGroups] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            fetch('https://hobbyhub-server-three.vercel.app/groups')
                .then(res => res.json())
                .then(data => {
                    setGroups(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching featured groups:', error);
                    setLoading(false);
                });
        }, []);
    
        if (loading) return <Loading />








    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Hobby Groups</h1>

            {groups.length === 0 ? (
                <p className="text-center text-gray-600">No groups found.</p>
            ) : (
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[640px] md:min-w-full bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                        <thead className="bg-gray-100 text-gray-700 text-left">
                            <tr>
                                <th className="py-3 px-4">#</th>
                                <th className="py-3 px-4">Group Name</th>
                                <th className="py-3 px-4">Category</th>
                                <th className="py-3 px-4">Location</th>
                                <th className="py-3 px-4">Max Members</th>
                                <th className="py-3 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map((group, index) => (
                                <tr key={group._id} className="border-t hover:bg-gray-50">
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4 font-semibold">{group.groupName}</td>
                                    <td className="py-3 px-4">{group.hobbyCategory}</td>
                                    <td className="py-3 px-4">{group.location}</td>
                                    <td className="py-3 px-4">{group.maxMembers}</td>
                                    <td className="py-3 px-4 text-center">
                                        <Link to={`/groupDetails/${group._id}`}>
                                            <button className="px-3 py-2 rounded-lg hover:shadow-lg transition font-semibold">
                                                See More
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllGroups;
