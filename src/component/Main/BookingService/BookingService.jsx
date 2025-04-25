



import React, { useState } from "react";

const Booking = () => {
  const [customers, setCustomers] = useState([
    { name: "Plumbing Repair", dateJoined: "2 March, 2025", location:"Dhaka, Bangladesh", price: '$ 150', customer:'Anika', status: "Demnächst" },
    { name: "Plumbing Repair", dateJoined: "2 March, 2025", location:"Dhaka, Bangladesh", price: '$ 150', customer:'Anika', status: "Demnächst" },
    { name: "Plumbing Repair", dateJoined: "2 March, 2025", location:"Dhaka, Bangladesh", price: '$ 150', customer:'Anika', status: "Demnächst" },
    { name: "Plumbing Repair", dateJoined: "2 March, 2025", location:"Dhaka, Bangladesh", price: '$ 150', customer:'Anika', status: "Demnächst" },
    { name: "Plumbing Repair", dateJoined: "2 March, 2025", location:"Dhaka, Bangladesh", price: '$ 150', customer:'Anika', status: "Demnächst" },
   
    // Add more customers as needed
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);

  // Open the first modal with customer details
  const openModal = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  // Close the customer details modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  // Open the block confirmation modal
  const openBlockModal = () => {
    setIsBlockModalOpen(true);
  };

  // Close the block confirmation modal
  const closeBlockModal = () => {
    setIsBlockModalOpen(false);
  };

  // Block the customer after confirmation
  const blockCustomer = () => {
    setCustomers(customers.map((customer) =>
      customer.email === selectedCustomer.email
        ? { ...customer, status: "Blocked" }
        : customer
    ));
    closeBlockModal();
    closeModal();
  };

  return (
    <div className="w-full container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">All Booking</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-[#1EB9C6] text-white">
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Customer Name</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">{customer.name}</td>
              <td className="p-3">{customer.dateJoined}</td>
              <td className="p-3">{customer.location}</td>
              <td className="p-3">{customer.price}</td>
              <td className="p-3">{customer.customer}</td>
              
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full ${customer.status === "Blocked" ? "bg-red-500 text-white" : "bg-[#1EB9C6] text-white"}`}>
                  {customer.status}
                </span>
              </td>
              <td className="p-3">
                <button
                  className="text-[#1EB9C6] hover:text-teal-700"
                  onClick={() => openModal(customer)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Customer Details Modal */}
      {isModalOpen && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex flex-col items-center">
              <img src="/path-to-your-image.jpg" alt="Customer" className="w-32 h-32 rounded-full mb-4" />
              <h2 className="text-xl font-bold">{selectedCustomer.name}</h2>
              <p className="text-gray-600">{selectedCustomer.email}</p>
              <p className="text-gray-600">Joined: {selectedCustomer.dateJoined}</p>
              <p className="text-gray-600">Total Bookings: {selectedCustomer.bookings}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
               
            </div>
          </div>
        </div>
      )}

      {/* Block Confirmation Modal */}
      {isBlockModalOpen && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex flex-col items-center">
              <img src="/path-to-your-image.jpg" alt="Customer" className="w-32 h-32 rounded-full mb-4" />
              <h2 className="text-xl font-bold">Are you sure you want to block {selectedCustomer.name}?</h2>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={closeBlockModal}
              >
                Close
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={blockCustomer}
              >
                Yes, Block
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;