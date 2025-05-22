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
                    console.log(data)
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
                            Swal.fire("Deleted!", "Your Group has been deleted.", "success");

                            const remainingGroups = myGroups.filter(group => group._id !== _id);
                            setMyGroups(remainingGroups);
                        }
                    });
            }
        });
    };



    return (
        <div className="p-6">
            <h1 className="text-3xl mt-10 font-bold text-center text-gray-800">My Groups</h1>

            {myGroups.length === 0 ? (


                <div className="max-w-5xl mx-auto mt-10 bg-gray-100 border border-gray-300  px-6 py-8 rounded-2xl shadow hover:shadow-lg transition text-center animate-fadeIn">
                    <div className="flex flex-col py-15 items-center space-y-4">
                        <TiGroup size={100} className="text-blue-500    " />
                        <h2 className="text-2xl font-semibold">No Groups Created</h2>
                        <p className="text-gray-600">
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

                <div className="overflow-x-auto mt-10 shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full max-w-7xl mx-auto bg-white">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-sm uppercase tracking-wider">
                                <th className="px-6 py-4 text-left">Image</th>
                                <th className="px-6 py-4 text-left">Group Name</th>
                                <th className="px-6 py-4 text-left">Hobby</th>
                                <th className="px-6 py-4 text-left">Location</th>
                                <th className="px-6 py-4 text-left">Max Members</th>
                                <th className="px-6 py-4 text-left">Start Date</th>
                                <th className="px-6 py-4 text-left">Description</th>
                                <th className="px-6 py-4 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-700 text-sm">
                            {myGroups.map((group) => (
                                <tr
                                    key={group._id}
                                    className="hover:bg-blue-50 hover:scale-[1.015] hover:shadow-md transform transition-all duration-300 ease-in-out"
                                >
                                    <td className="px-6 py-4">
                                        <img
                                            src={group.imageUrl}
                                            alt={group.groupName}
                                            className="w-20 h-12 rounded object-cover border border-gray-300"
                                        />
                                    </td>
                                    <td className="px-6 py-4">{group.groupName}</td>
                                    <td className="px-6 py-4">{group.hobbyCategory}</td>
                                    <td className="px-6 py-4">{group.location}</td>
                                    <td className="px-6 py-4">{group.maxMembers}</td>
                                    <td className="px-6 py-4">{group.startDate}</td>
                                    <td className="px-6 py-4 truncate max-w-xs">{group.description}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button
                                            onClick={() => handleDelete(group._id)}
                                            className="bg-red-500 btn text-white px-4 py-1 text-sm hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>



                                        <Link to={`/updateGroup/${group._id}`}>
                                            <button className='btn'>Update</button>
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
