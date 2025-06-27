import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




const hobbyCategories = [
    'Drawing & Painting',
    'Photography',
    'Video Gaming',
    'Fishing',
    'Running',
    'Cooking',
    'Reading',
    'Writing',
    'Hiking',
    'Other',
];

const UpdateGroup = () => {

    const { description, groupName, hobbyCategory, imageUrl, location, maxMembers, startDate, _id } = useLoaderData();
    console.log(description, groupName, hobbyCategory, imageUrl, location, maxMembers, startDate, _id);

    const { user } = use(AuthContext);

    const navigate = useNavigate()

    const handleUpdateGroup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedGroup = Object.fromEntries(formData.entries());
        console.log(updatedGroup);


        fetch(`https://hobbyhub-server-three.vercel.app/groups/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedGroup)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/myGroup')

                if (data.modifiedCount) {

                    console.log("after adding groups to db", data);
                    Swal.fire({
                        icon: "success",
                        title: "Group Updated Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })




    };

    return (
        <div className="max-w-5xl mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Update The Group</h2>

            <form onSubmit={handleUpdateGroup}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                            <input type="text" name="groupName" defaultValue={groupName} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category</label>
                            <select name="hobbyCategory" defaultValue={hobbyCategory} required className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-gray-500">
                                {hobbyCategories.map((category, idx) => (
                                    <option key={idx} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Location</label>
                            <input type="text" name="location" defaultValue={location} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Max Members</label>
                            <input type="number" name="maxMembers" min="1" defaultValue={maxMembers} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                            <input type="date" name="startDate" defaultValue={startDate} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
                        </div>
                    </div>


                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea name="description" rows="4" defaultValue={description} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input type="url" name="imageUrl" defaultValue={imageUrl} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input type="text" value={user.displayName} readOnly className="w-full px-4 py-2 bg-gray-100 border rounded-lg cursor-not-allowed" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                            <input type="email" value={user.email} readOnly className="w-full px-4 py-2 bg-gray-100 border rounded-lg cursor-not-allowed" />
                        </div>
                    </div>
                </div>


                <div className="text-center mt-8">
                    <button type="submit" className="px-6 py-2 rounded-lg hover:shadow-2xl border w-full transition duration-200">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateGroup;