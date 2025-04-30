import React, { useState } from 'react';

function GeneralSetting() {
  const [username, setUsername] = useState('Anika Alam');
  const [email, setEmail] = useState('ABC@gmail.com');

  return (
    <div className=" flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-6">GENERAL SETTINGS</h2>
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-200">
            <img
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
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
          <button className="mt-6 w-full py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-[#346b70]">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeneralSetting;
