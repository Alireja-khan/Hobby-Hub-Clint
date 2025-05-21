import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
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
  'Other',
];

const CreateGroup = () => {

  const { user } = use(AuthContext);
  console.log(user.displayName, user.email)

  const handleAddGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());
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
    <div className="max-w-5xl mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Create a Hobby Group</h2>

      <form onSubmit={handleAddGroup}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
              <input type="text" name="groupName" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category</label>
              <select name="hobbyCategory" required className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-gray-500">
                {hobbyCategories.map((category, idx) => (
                  <option key={idx} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Location</label>
              <input type="text" name="location" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Members</label>
              <input type="number" name="maxMembers" min="1" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input type="date" name="startDate" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>
          </div>


          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea name="description" rows="4" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input type="url" name="imageUrl" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500" />
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
          <button type="submit" className="px-6 py-2 bg-blue-400 btn-block text-white rounded-lg hover:bg-blue-500 transition duration-200">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
