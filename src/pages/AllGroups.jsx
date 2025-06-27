import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const AllGroups = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc'); // asc or desc
    const [filterCategory, setFilterCategory] = useState('All'); // category filter

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

    // Filter groups based on selected category
    const filteredGroups = groups.filter(group =>
        filterCategory === 'All' ? true : group.hobbyCategory === filterCategory
    );

    // Sort groups based on groupName
    const sortedGroups = [...filteredGroups].sort((a, b) => {
        const nameA = a.groupName.toLowerCase();
        const nameB = b.groupName.toLowerCase();
        if (sortOrder === 'asc') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Hobby Groups</h1>

            {/* Sorting & Filtering Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="text-gray-700 font-medium">Sort by:</label>
                    <select
                        id="sort"
                        className="border rounded-lg px-3 py-2"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Name: A-Z</option>
                        <option value="desc">Name: Z-A</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label htmlFor="filter" className="text-gray-700 font-medium">Filter by Category:</label>
                    <select
                        id="filter"
                        className="border rounded-lg px-3 py-2"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        {/* Dynamically render categories from groups */}
                        {[...new Set(groups.map(g => g.hobbyCategory))].map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Groups Grid */}
            {sortedGroups.length === 0 ? (
                <p className="text-center text-gray-600">No groups found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {sortedGroups.map((group) => (
                        <div key={group._id} className="bg-white rounded-3xl shadow-lg overflow-hidden transition hover:shadow-xl">
                            <div className="relative h-48">
                                <img
                                    src={group.imageUrl || 'https://i.ibb.co/008N2TQ/Team-spirit-pana-1.png'}
                                    alt={group.groupName}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-4 py-8"></div>
                            </div>
                            <div className='pl-4 pt-4'>
                                <h2 className="text-lg font-semibold">{group.groupName}</h2>
                            </div>
                            <div className="px-4 pb-4 pt-2 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Category: {group.hobbyCategory}</p>
                                    <p className="text-sm text-gray-500">Max Members: {group.maxMembers}</p>
                                </div>
                                <Link to={`/groupDetails/${group._id}`}>
                                    <button className="bg-blue-100 hover:bg-blue-200 font-semibold text-sm px-4 py-2 rounded-xl">View</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllGroups;
