import React, { useState } from 'react';
import { GrUnlock } from "react-icons/gr";
import { MdOutlineBlock } from "react-icons/md";

const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sessionToBlock, setSessionToBlock] = useState(null);
    const [blockedSessions, setBlockedSessions] = useState(new Set()); // Track blocked sessions
    const sessions = [
        { name: 'First Session', email: 'abc@gmail.com', location: 'Florence, Italy', Total: "120", duration: '2 February, 2025' },
        { name: 'Second Session', email: 'xyz@gmail.com', location: 'Rome, Italy', Total: "150", duration: '5 March, 2025' },
        { name: 'Third Session', email: 'pqr@gmail.com', location: 'Milan, Italy', Total: "180", duration: '10 March, 2025' },
        { name: 'Fourth Session', email: 'pqr@gmail.com', location: 'Milan, Italy', Total: "180", duration: '10 March, 2025' },
        { name: 'Five Session', email: 'pqr@gmail.com', location: 'Milan, Italy', Total: "180", duration: '10 March, 2025' },
        { name: 'Six Session', email: 'pqr@gmail.com', location: 'Milan, Italy', Total: "180", duration: '10 March, 2025' },
        { name: 'Seven Session', email: 'pqr@gmail.com', location: 'Milan, Italy', Total: "180", duration: '10 March, 2025' },
        { name: 'Eight Session', email: 'pqr@gmail.com', location: 'Milan, Italy', Total: "180", duration: '10 March, 2025' },
    ];

    const handleBlock = (session) => {
        setSessionToBlock(session);
        setIsModalOpen(true);
    };

    const confirmBlock = () => {
        // Block the session by adding it to the blockedSessions set
        setBlockedSessions(prev => new Set(prev.add(sessionToBlock.name)));
        setIsModalOpen(false);
    };

    const confirmUnblock = () => {
        // Unblock the session by removing it from the blockedSessions set
        setBlockedSessions(prev => {
            const updated = new Set(prev);
            updated.delete(sessionToBlock.name);
            return updated;
        });
        setIsModalOpen(false);
    };

    const cancelBlock = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="w-full table-auto">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Profile Name</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Email</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Location</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Total Session Created</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Adding Date</th>
                            <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessions.map((session, index) => (
                            <tr
                                key={index}
                                className={`border-b hover:bg-gray-50 ${blockedSessions.has(session.name) ? 'bg-gray-100' : ''}`}
                            >
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">
                                    {session.name}
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">
                                    {blockedSessions.has(session.name) ? 'Blocked' : session.email}
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">
                                    {blockedSessions.has(session.name) ? 'Blocked' : session.location}
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">
                                    {blockedSessions.has(session.name) ? 'Blocked' : session.Total}
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">
                                    {blockedSessions.has(session.name) ? 'Blocked' : session.duration}
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-800 text-center">
                                    {blockedSessions.has(session.name) ? (
                                        <button className="text-red-500" onClick={() => handleBlock(session)}>
                                            <MdOutlineBlock className="text-red-500 text-xl" />
                                        </button>
                                    ) : (
                                        <button className="text-blue-500" onClick={() => handleBlock(session)}>
                                            <GrUnlock className="text-gray-400 text-xl" />
                                        </button>
                                    )}
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
                            <h3 className="text-lg font-semibold">
                                {blockedSessions.has(sessionToBlock.name)
                                    ? `Are you sure you want to unblock ${sessionToBlock.name}?`
                                    : `Are you sure you want to block ${sessionToBlock.name}?`}
                            </h3>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md" onClick={cancelBlock}>
                                No
                            </button>
                            <button
                                className={`px-4 py-2 ${blockedSessions.has(sessionToBlock.name) ? 'bg-green-600' : 'bg-red-600'} text-white rounded-md`}
                                onClick={blockedSessions.has(sessionToBlock.name) ? confirmUnblock : confirmBlock}
                            >
                                {blockedSessions.has(sessionToBlock.name) ? 'Yes, Unblock' : 'Yes, Block'}
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
                    <button className="px-4 py-2 text-sm text-white bg-gray-300 rounded-md">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Users;
