import React, { useState } from 'react';

function EditeProfile() {
  const [username, setUsername] = useState('Anika Alam');
  const [email, setEmail] = useState('ABC@gmail.com');
  const [profilePicture, setProfilePicture] = useState('https://randomuser.me/api/portraits/women/21.jpg');

  // Handle profile picture change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result); // Set the image as base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-6">GENERAL SETTINGS</h2>
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-200">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Buttons to change/delete profile picture */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => document.getElementById('fileInput').click()} // Trigger file input click on button click
              className="text-sm py-1 px-4 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600"
            >
              Change Picture
            </button>
            <button
              onClick={() => setProfilePicture('https://randomuser.me/api/portraits/women/21.jpg')} // Reset profile picture to default
              className="text-sm py-1 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          {/* Form to edit username and email */}
          <div className="space-y-4 w-full">
            <div>
              <label className="text-sm font-medium text-gray-700">User Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-md mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md mt-1"
              />
            </div>
          </div>
          {/* Save Profile button */}
          <button className="mt-6 w-full py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditeProfile;
