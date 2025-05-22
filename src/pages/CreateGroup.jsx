import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const hobbyCategories = [
  'Drawing & Painting',
  'Photography',
  'Video Gaming',
  'Fishing',
  'Running',
  'Cooking',
  'Reading',
  'Writing',
  'Other',
];

const statusCategories = [
  'ongoing',
  'outgoing'
]

const CreateGroup = () => {

  const { user } = use(AuthContext);
  console.log(user.displayName, user.email)

  const navigate = useNavigate();

  const handleAddGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // const newGroup = Object.fromEntries(formData.entries());

    const newGroup = {
      ...Object.fromEntries(formData.entries()),
      creatorEmail: user.email // Add this
    };


    console.log(newGroup);


    fetch('http://localhost:5000/groups', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGroup)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          navigate('/')

          console.log("after adding groups to db", data);
          Swal.fire({
            icon: "success",
            title: "Group Create Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })


  };

  return (


    <div className="max-w-6xl mx-auto mt-20 p-10 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Create a Hobby Group</h2>

      <form onSubmit={handleAddGroup}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Group Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Group Information</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Group Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="groupName"
                placeholder="Give a Group Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category <span className="text-red-500">*</span></label>
              <select
                name="hobbyCategory"
                required
                className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-gray-300"
              >
                {hobbyCategories.map((category, idx) => (
                  <option key={idx} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="location"
                placeholder="Set Your Location"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Members <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  name="maxMembers"
                  min="1"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  name="startDate"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status <span className="text-red-500">*</span></label>
              <select
                name="status"
                required
                className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-gray-300"
              >
                {statusCategories.map((category, idx) => (
                  <option key={idx} value={category}>{category}</option>
                ))}
              </select>
            </div>


          </div>

          {/* Description & Creator */}
          <div className="space-y-6">

            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Details & Creator</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-red-500">*</span></label>
              <textarea
                name="description"
                rows="4"
                placeholder="Write a short description about the group..."
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL <span className="text-red-500">*</span></label>
              <input
                type="url"
                name="imageUrl"
                placeholder="Paste image URL here"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={user.displayName}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg cursor-not-allowed"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                type="submit"
                className=" hover:shadow-2xl border text-lg font-semibold py-3 px-8 rounded-xl shadow transition duration-300"
              >
                Create Group
              </button>
            </div>


          </div>
        </div>

        {/* Submit Button */}

      </form>
    </div>



  );
};

export default CreateGroup;
