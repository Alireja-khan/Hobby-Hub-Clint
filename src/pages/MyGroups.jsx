import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const myGroups = useLoaderData();
    console.log(myGroups)

    const handleDelete = async (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Group has been deleted.",
                                icon: "success"
                            });
                        }
                    })

                // 
            }
        });

        // const confirmDelete = window.confirm("Are you sure you want to delete this group?");
        // if (confirmDelete) {
        //     try {
        //         const res = await fetch(`https://your-api-url/groups/${_id}`, {
        //             method: 'DELETE',
        //         });
        //         const data = await res.json();

        //         if (data.success) {
        //             alert("Group deleted successfully!");
        //             // Refresh or filter the deleted group from state (if using useState)
        //         } else {
        //             alert("Failed to delete the group.");
        //         }
        //     } catch (error) {
        //         console.error("Error deleting group:", error);
        //         alert("Something went wrong!");
        //     }
        // }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Groups</h1>

            <div className="overflow-x-auto shadow-lg rounded-lg overflow-hidden">
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
                                        onClick={() => alert('Update functionality coming soon')}
                                        className="bg-blue-500 btn text-white px-4 py-1 text-sm hover:bg-blue-600 transition"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(group._id)}
                                        className="bg-red-500 btn text-white px-4 py-1 text-sm hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>

                                    <Link to={`/groupDetails/${group._id}`}>
                                        <button className='btn'>Details</button>
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default MyGroups;
