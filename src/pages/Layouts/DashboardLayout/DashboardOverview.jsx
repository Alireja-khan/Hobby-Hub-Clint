import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const DashboardOverview = () => {
    const { user } = useContext(AuthContext);
    const [allGroupsCount, setAllGroupsCount] = useState(0);
    const [myGroupsCount, setMyGroupsCount] = useState(0);

    useEffect(() => {
        // Fetch total groups
        fetch('https://hobbyhub-server-three.vercel.app/groups')
            .then(res => res.json())
            .then(data => setAllGroupsCount(data.length));

        // Fetch user's groups
        if (user?.email) {
            fetch(`https://hobbyhub-server-three.vercel.app/groups?creatorEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setMyGroupsCount(data.length));
        }
    }, [user]);

    return (
        <section className="max-w-7xl mx-auto px-6 py-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 tracking-tight">Dashboard Overview</h2>

            {/* User Welcome Card */}
            <div className="bg-gradient-to-r from-white via-gray-50 to-white shadow-lg rounded-3xl p-8 mb-14 transition hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">👋 Welcome, {user?.displayName || 'User'}!</h3>
                <p className="text-gray-600 text-base">📧 Email: {user?.email}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <StatCard
                    color="blue"
                    title="Total Groups"
                    value={allGroupsCount}
                    icon="📚"
                />
                <StatCard
                    color="green"
                    title="My Groups"
                    value={myGroupsCount}
                    icon="👥"
                />
                <StatCard
                    color="purple"
                    title="User Role"
                    value={user?.role || 'Member'}
                    icon="⭐"
                />
            </div>
        </section>
    );
};

const StatCard = ({ color, title, value, icon }) => (
    <div
        className={`bg-${color}-50 p-8 rounded-3xl shadow-md text-center transform transition hover:-translate-y-1 hover:shadow-xl`}
    >
        <div className={`text-${color}-600 text-4xl mb-4`}>{icon}</div>
        <h4 className={`text-xl font-bold text-${color}-800 mb-2`}>{title}</h4>
        <p className={`text-4xl font-extrabold text-${color}-900`}>{value}</p>
    </div>
);

export default DashboardOverview;
