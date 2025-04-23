

import React, { useState } from 'react';
import provider from '../../../assets/provider/provider.jpg'


const PersonalProvider = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [providers, setProviders] = useState([
        {image:provider, name: 'Anika Alam', email: 'abc@gmail.com', totalService: 'Anika', dateJoined: '2 March, 2025', totalBookings: 12, status: 'Aktiv', image: 'https://via.placeholder.com/150' },
        { name: 'Khairul Beshar', email: 'khairul@gmail.com', totalService: 170, dateJoined: '2 March, 2025', totalBookings: 14, status: 'Aktiv', image: 'https://via.placeholder.com/150' },
        { name: 'ami Beshar', email: 'ami@gmail.com', totalService: 170, dateJoined: '2 March, 2025', totalBookings: 14, status: 'Aktiv', image: 'https://via.placeholder.com/150' },
    ]);

    const handleOpenModal = (provider) => {
        setSelectedProvider(provider);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProvider(null);
    };

    const handleOpenBlockModal = () => {
        setIsBlockModalOpen(true);
    };

    const handleCloseBlockModal = () => {
        setIsBlockModalOpen(false);
    };

    const handleBlockUnblockProvider = () => {
        const updatedProviders = providers.map((provider) =>
            provider.name === selectedProvider.name
                ? { ...provider, status: selectedProvider.status === 'Blocked' ? 'Aktiv' : 'Blocked' }
                : provider
        );
        setProviders(updatedProviders);
        handleCloseBlockModal();
        handleCloseModal();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="overflow-x-auto">
                <h2 className="text-2xl font-bold mb-4">All Provider List</h2>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-[#1EB9C6] text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">Provider image</th>
                            <th className="py-2 px-4 text-left">Provider Name</th>
                            <th className="py-2 px-4 text-left">Total Service</th>
                            <th className="py-2 px-4 text-left">Date Joined</th>
                            <th className="py-2 px-4 text-left">Total Bookings</th>
                            <th className="py-2 px-4 text-left">Status</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {providers.map((provider, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4">
                                    <img src={provider.image} alt={provider.name} className="w-12 h-12 rounded-full" />
                                </td>
                                <td className="py-2 px-4">{provider.name}</td>
                                <td className="py-2 px-4">{provider.totalService}</td>
                                <td className="py-2 px-4">{provider.dateJoined}</td>
                                <td className="py-2 px-4">{provider.totalBookings}</td>
                                <td className={`py-2 px-4 ${provider.status === 'Blocked' ? 'text-red-500' : 'text-green-500'}`}>
                                    {provider.status}
                                </td>
                                <td className="py-2 px-4">
                                    <button
                                        className="text-[#1EB9C6] hover:text-teal-700"
                                        onClick={() => handleOpenModal(provider)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* First Modal - Provider Details */}
            {isModalOpen && (
                <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white border border-[#309EAD] p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <img src={selectedProvider?.image} alt="Provider" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Provider Name: {selectedProvider?.name}</h3>
                        <p className="text-sm mb-2">Email: {selectedProvider?.email}</p>
                        <p className="text-sm mb-2">Joining Date: {selectedProvider?.dateJoined}</p>
                        <p className="text-sm mb-2">Total Services: {selectedProvider?.totalService}</p>
                        <p className="text-sm mb-4">Total Bookings: {selectedProvider?.totalBookings}</p>
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                            <button
                                className="bg-teal-500 text-white px-4 py-2 rounded"
                                onClick={handleOpenBlockModal}
                            >
                                {selectedProvider?.status === 'Blocked' ? 'Unblock' : 'Block'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Second Modal - Block Confirmation */}
            {isBlockModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-xl font-semibold mb-4">
                            Are you sure you want to {selectedProvider?.status === 'Blocked' ? 'unblock' : 'block'} this provider?
                        </h3>
                        <p className="mb-4">Provider Name: {selectedProvider?.name}</p>
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                                onClick={handleCloseBlockModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={handleBlockUnblockProvider}
                            >
                                {selectedProvider?.status === 'Blocked' ? 'Unblock' : 'Block'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalProvider;


