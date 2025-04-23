import React, { useState } from 'react';
import { MdBlockFlipped } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Company = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [customers, setCustomers] = useState([
        { name: 'ABC International Ltd.', providers: 170, dateJoined: '2 March, 2025', totalServices: 14, status: 'Active' },
        { name: 'Sparch Tech Agency', providers: 170, dateJoined: '2 March, 2025', totalServices: 14, status: 'Active' },
        { name: 'ABCd International Ltd.', providers: 170, dateJoined: '2 March, 2025', totalServices: 14, status: 'Active' },
        { name: 'ABCe International Ltd.', providers: 170, dateJoined: '2 March, 2025', totalServices: 14, status: 'Active' },
    ]);

    const handleOpenModal = (company) => {
        setSelectedCompany(company);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCompany(null);
    };

    const handleBlockCompany = () => {
        // Update the status of the selected company to "Blocked"
        const updatedCustomers = customers.map((customer) =>
            customer.name === selectedCompany.name
                ? { ...customer, status: 'Blocked' }
                : customer
        );
        setCustomers(updatedCustomers); // Set the updated list to the state
        handleCloseModal(); // Close the modal after blocking
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='text-2xl mb-5'>Company list</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-[#1EB9C6] text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">Company Name</th>
                            <th className="py-2 px-4 text-left">Total Providers</th>
                            <th className="py-2 px-4 text-left">Date Joined</th>
                            <th className="py-2 px-4 text-left">Total Service</th>
                            <th className="py-2 px-4 text-left">Status</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                            <th className="py-2 px-4 text-left">view</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4">{customer.name}</td>
                                <td className="py-2 px-4">{customer.providers}</td>
                                <td className="py-2 px-4">{customer.dateJoined}</td>
                                <td className="py-2 px-4">{customer.totalServices}</td>
                                <td className={`py-2 px-4 ${customer.status === 'Blocked' ? 'text-red-500' : 'text-green-500'}`}>
                                    {customer.status}
                                </td>
                                <td className="py-2 px-4 ">
                                    <button
                                        className="bg-[#c64e1e] text-white p-2 rounded hover:bg-[#a53f18] transition duration-200"
                                        onClick={() => handleOpenModal(customer)}
                                        title="Block User"
                                    >
                                        <MdBlockFlipped className="text-lg" />
                                    </button>

                                </td>

                                <td>
                                    <Link to="/company-provider">
                                        <button
                                            className="text-[#1EB9C6] hover:text-teal-700"

                                        >
                                            view
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-xl font-semibold mb-4">Are you sure you want to block this company?</h3>
                        <p className="mb-4">Company Name: {selectedCompany?.name}</p>
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={handleBlockCompany}
                            >
                                Block
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Company;
