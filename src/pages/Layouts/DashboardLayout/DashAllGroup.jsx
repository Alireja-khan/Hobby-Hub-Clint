import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Loading';

const DashAllGroups = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc');
    const [filterCategory, setFilterCategory] = useState('All');

    useEffect(() => {
        const emailParam = user?.email ? `?creatorEmail=${user.email}` : '';
        fetch(`https://hobbyhub-server-three.vercel.app/groups${emailParam}`)
            .then(res => res.json())
            .then(data => {
                setGroups(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching groups:", error);
                setLoading(false);
            });
    }, [user]);

    if (loading) return <Loading />;

    const filteredGroups = groups.filter(group =>
        filterCategory === 'All' ? true : group.hobbyCategory === filterCategory
    );

    const sortedGroups = [...filteredGroups].sort((a, b) => {
        const nameA = a.groupName.toLowerCase();
        const nameB = b.groupName.toLowerCase();
        return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">📋 All Hobby Groups</h1>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <label className="text-gray-700 font-medium">Sort by:</label>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Name: A-Z</option>
                        <option value="desc">Name: Z-A</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-gray-700 font-medium">Category:</label>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        {[...new Set(groups.map(g => g.hobbyCategory))].map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Table */}
            {sortedGroups.length === 0 ? (
                <p className="text-center text-gray-500">No groups found.</p>
            ) : (
                <div className="overflow-x-auto bg-white shadow-md rounded-2xl border border-gray-100">
                    <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 text-left">#</th>
                                <th className="px-6 py-4 text-left">Group Name</th>
                                <th className="px-6 py-4 text-left">Category</th>
                                <th className="px-6 py-4 text-left">Max Members</th>
                                <th className="px-6 py-4 text-left">Image</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sortedGroups.map((group, index) => (
                                <tr key={group._id} className="hover:bg-gray-50 transition-all duration-150">
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                                        {group.groupName}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                            {group.hobbyCategory}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{group.maxMembers}</td>
                                    <td className="px-6 py-3">
                                        <img
                                            src={group.imageUrl || 'https://i.ibb.co/008N2TQ/Team-spirit-pana-1.png'}
                                            alt="Group"
                                            className="h-12 w-12 rounded-lg object-cover border border-gray-200"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link to={`/groupDetails/${group._id}`}>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition duration-200 shadow-sm">
                                                View
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

export default DashAllGroups;
