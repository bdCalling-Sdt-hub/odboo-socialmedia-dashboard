import React, { useState } from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SessionTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sessionToDelete, setSessionToDelete] = useState(null);
    const sessions = [
        { name: 'First Session', location: 'Florence, Italy', participants: 120, duration: '1,000 ms', best: '52:55', timeCount: 10 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        { name: 'Second Session', location: 'Paris, France', participants: 100, duration: '900 ms', best: '40:45', timeCount: 8 },
        // Add more sessions if needed
    ];

    const handleDelete = (session) => {
        setSessionToDelete(session);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        // Handle the delete logic here
        alert(`Session "${sessionToDelete.name}" deleted.`);
        setIsModalOpen(false);
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sessions</h2>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="w-full table-auto">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Session Name</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Location</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Total Participant</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Total Duration</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Best</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Total Time Count</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessions.map((session, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">{session.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">{session.location}</td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">{session.participants}</td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">{session.duration}</td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">{session.best}</td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">{session.timeCount}</td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">
                                    <button className="text-blue-500 hover:text-blue-700 mr-3">
                                        <Link to="/Analisiys"><IoMdInformationCircleOutline className="text-3xl" /></Link>
                                    </button>
                                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(session)}>
                                        <MdDelete className="text-red-600 text-3xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className="text-center mb-4">
                            <div className="flex justify-center items-center mb-2">
                                <MdDelete className="text-red-500 text-5xl bg-gray-200 p-4 rounded-full" />
                            </div>
                            <h3 className="text-lg font-semibold">Are you sure you want to delete {sessionToDelete.name}?</h3>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md" onClick={cancelDelete}>
                                No
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={confirmDelete}>
                                Yes
                            </button>
                        </div>
                    </div>

                </div>
            )}

            <div className="mt-4 flex justify-between items-center">
                <button className="text-gray-600 hover:text-gray-800">{"< Back"}</button>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md">1</button>
                    <button className="px-4 py-2 text-sm text-white bg-gray-300 rounded-md">2</button>
                    <button className="px-4 py-2 text-sm text-white bg-gray-300 rounded-md">3</button>
                    <button className="px-4 py-2 text-sm text-white bg-gray-300 rounded-md">Next </button>
                </div>
            </div>
        </div>
    );
};

export default SessionTable;
