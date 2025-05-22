import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TiGroup } from "react-icons/ti";
import { AuthContext } from '../context/AuthProvider';

const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/groups?creatorEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyGroups(data);
                });
        }
    }, [user]);

    const handleDelete = async (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your group has been deleted.", "success");
                            const remainingGroups = myGroups.filter(group => group._id !== _id);
                            setMyGroups(remainingGroups);
                        }
                    });
            }
        });
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-2xl sm:text-3xl mt-10 font-bold text-center text-gray-800">My Groups</h1>

            {myGroups.length === 0 ? (
                <div className="max-w-5xl mx-auto mt-10 bg-gray-100 border border-gray-300 px-6 py-8 rounded-2xl shadow hover:shadow-lg transition text-center">
                    <div className="flex flex-col items-center space-y-4">
                        <TiGroup size={80} className="text-blue-500" />
                        <h2 className="text-xl sm:text-2xl font-semibold">No Groups Created</h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            You haven’t created any groups yet. Start building your first group now!
                        </p>
                        <Link to="/createGroup">
                            <button className="mt-4 bg-blue-400 text-white px-5 py-2 rounded-lg hover:bg-blue-500 shadow hover:shadow-lg transition">
                                Create Group
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="overflow-x-auto mt-10 shadow-lg rounded-lg">
                    <table className="max-w-max	 mb-20 mx-auto text-sm text-left text-gray-700 bg-white">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-xs sm:text-sm uppercase tracking-wider">
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3">Group Name</th>
                                <th className="px-4 py-3">Hobby</th>
                                <th className="px-4 py-3">Location</th>
                                <th className="px-4 py-3">Max Members</th>
                                <th className="px-4 py-3">Start Date</th>
                                <th className="px-4 py-3">Description</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myGroups.map((group) => (
                                <tr
                                    key={group._id}
                                    className="hover:bg-blue-50 hover:scale-[1.01] hover:shadow-md transform transition duration-300"
                                >
                                    <td className="px-4 py-3">
                                        <img
                                            src={group.imageUrl}
                                            alt={group.groupName}
                                            className="w-16 h-10 rounded object-cover border border-gray-300"
                                        />
                                    </td>
                                    <td className="px-4 py-3">{group.groupName}</td>
                                    <td className="px-4 py-3">{group.hobbyCategory}</td>
                                    <td className="px-4 py-3">{group.location}</td>
                                    <td className="px-4 py-3">{group.maxMembers}</td>
                                    <td className="px-4 py-3">{group.startDate}</td>
                                    <td className="px-4 py-3 max-w-[150px] truncate">{group.description}</td>
                                    <td className="px-4 py-3 flex flex-wrap gap-2">
                                        <button
                                            onClick={() => handleDelete(group._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs sm:text-sm"
                                        >
                                            Delete
                                        </button>
                                        <Link to={`/updateGroup/${group._id}`}>
                                            <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-xs sm:text-sm">
                                                Update
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

export default MyGroups;
