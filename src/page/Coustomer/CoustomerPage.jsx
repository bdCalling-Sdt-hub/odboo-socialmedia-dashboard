



// import React, { useState } from "react";

// const CoustomerPage = () => {
//   const [customers, setCustomers] = useState([
//     { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Activ" },
//     { name: "Anika Alam", email: "anika@gmail.com", dateJoined: "2 March, 2025", bookings: 12, status: "Activ" },
//     { name: "John Doe", email: "john@example.com", dateJoined: "1 March, 2025", bookings: 8, status: "Activ" },
//     { name: "Johne sina", email: "john1@example.com", dateJoined: "2 March, 2025", bookings: 8, status: "Activ" },
//     { name: "Jullyan alvere", email: "john2@example.com", dateJoined: "3 March, 2025", bookings: 8, status: "Activ" },
//     { name: "Johnson", email: "john3@example.com", dateJoined: "4 March, 2025", bookings: 8, status: "Activ" },
//     { name: "Jobbar ali", email: "john4@example.com", dateJoined: "5 March, 2025", bookings: 8, status: "Activ" },
//     { name: "Jibon mia", email: "john5@example.com", dateJoined: "6 March, 2025", bookings: 8, status: "Activ" },
//     { name: "Jamsed mujumder", email: "john6@example.com", dateJoined: "7 March, 2025", bookings: 8, status: "Activ" },
//     // Add more customers as needed
//   ]);

//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);

//   // Open the first modal with customer details
//   const openModal = (customer) => {
//     setSelectedCustomer(customer);
//     setIsModalOpen(true);
//   };

//   // Close the customer details modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCustomer(null);
//   };

//   // Open the block confirmation modal
//   const openBlockModal = () => {
//     setIsBlockModalOpen(true);
//   };

//   // Close the block confirmation modal
//   const closeBlockModal = () => {
//     setIsBlockModalOpen(false);
//   };

//   // Block the customer after confirmation
//   const blockCustomer = () => {
//     setCustomers(customers.map((customer) =>
//       customer.email === selectedCustomer.email
//         ? { ...customer, status: "Blocked" }
//         : customer
//     ));
//     closeBlockModal();
//     closeModal();
//   };

//   return (
//     <div className="w-full container mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-4">All Customers</h1>
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-[#1EB9C6] text-white">
//             <th className="p-3 text-left">Customer Name</th>
//             <th className="p-3 text-left">Customer Email</th>
//             <th className="p-3 text-left">Date Joined</th>
//             <th className="p-3 text-left">Bookings</th>
//             <th className="p-3 text-left">Status</th>
//             <th className="p-3 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer, index) => (
//             <tr key={index} className="border-b hover:bg-gray-100">
//               <td className="p-3">{customer.name}</td>
//               <td className="p-3">{customer.email}</td>
//               <td className="p-3">{customer.dateJoined}</td>
//               <td className="p-3">{customer.bookings}</td>
//               <td className="p-3">
//                 <span className={`px-3 py-1 rounded-full ${customer.status === "Blocked" ? "bg-red-500 text-white" : "bg-[#1EB9C6] text-white"}`}>
//                   {customer.status}
//                 </span>
//               </td>
//               <td className="p-3">
//                 <button
//                   className="text-[#1EB9C6] hover:text-teal-700"
//                   onClick={() => openModal(customer)}
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Customer Details Modal */}
//       {isModalOpen && selectedCustomer && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="flex flex-col items-center">
//               <img src="/path-to-your-image.jpg" alt="Customer" className="w-32 h-32 rounded-full mb-4" />
//               <h2 className="text-xl font-bold">{selectedCustomer.name}</h2>
//               <p className="text-gray-600">{selectedCustomer.email}</p>
//               <p className="text-gray-600">Joined: {selectedCustomer.dateJoined}</p>
//               <p className="text-gray-600">Total Bookings: {selectedCustomer.bookings}</p>
//             </div>
//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                 onClick={closeModal}
//               >
//                 Close
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded-md"
//                 onClick={openBlockModal}
//               >
//                 Block
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Block Confirmation Modal */}
//       {isBlockModalOpen && selectedCustomer && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="flex flex-col items-center">
//               <img src="/path-to-your-image.jpg" alt="Customer" className="w-32 h-32 rounded-full mb-4" />
//               <h2 className="text-xl font-bold">Are you sure you want to block {selectedCustomer.name}?</h2>
//             </div>
//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                 onClick={closeBlockModal}
//               >
//                 Close
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded-md"
//                 onClick={blockCustomer}
//               >
//                 Yes, Block
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CoustomerPage;






import React, { useState } from "react";

const CoustomerPage = () => {
  const [customers, setCustomers] = useState([
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Activ" },
    { name: "Anika Alam", email: "anika@gmail.com", dateJoined: "2 March, 2025", bookings: 12, status: "Activ" },
    { name: "John Doe", email: "john@example.com", dateJoined: "1 March, 2025", bookings: 8, status: "Activ" },
    { name: "Johne sina", email: "john1@example.com", dateJoined: "2 March, 2025", bookings: 8, status: "Activ" },
    { name: "Jullyan alvere", email: "john2@example.com", dateJoined: "3 March, 2025", bookings: 8, status: "Activ" },
    { name: "Johnson", email: "john3@example.com", dateJoined: "4 March, 2025", bookings: 8, status: "Activ" },
    { name: "Jobbar ali", email: "john4@example.com", dateJoined: "5 March, 2025", bookings: 8, status: "Activ" },
    { name: "Jibon mia", email: "john5@example.com", dateJoined: "6 March, 2025", bookings: 8, status: "Activ" },
    { name: "Jamsed mujumder", email: "john6@example.com", dateJoined: "7 March, 2025", bookings: 8, status: "Activ" },
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

  // Open the block/unblock confirmation modal
  const openBlockModal = () => {
    setIsBlockModalOpen(true);
  };

  // Close the block/unblock confirmation modal
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

  // Unblock the customer after confirmation
  const unblockCustomer = () => {
    setCustomers(customers.map((customer) =>
      customer.email === selectedCustomer.email
        ? { ...customer, status: "Activ" }
        : customer
    ));
    closeBlockModal();
    closeModal();
  };

  return (
    <div className="w-full container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">All Customers</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-[#1EB9C6] text-white">
            <th className="p-3 text-left">Customer Name</th>
            <th className="p-3 text-left">Customer Email</th>
            <th className="p-3 text-left">Date Joined</th>
            <th className="p-3 text-left">Bookings</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">{customer.name}</td>
              <td className="p-3">{customer.email}</td>
              <td className="p-3">{customer.dateJoined}</td>
              <td className="p-3">{customer.bookings}</td>
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
              {selectedCustomer.status === "Blocked" ? (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={openBlockModal}
                >
                  Unblock
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={openBlockModal}
                >
                  Block
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Block/Unblock Confirmation Modal */}
      {isBlockModalOpen && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex flex-col items-center">
              <img src="/path-to-your-image.jpg" alt="Customer" className="w-32 h-32 rounded-full mb-4" />
              <h2 className="text-xl font-bold">
                Are you sure you want to {selectedCustomer.status === "Blocked" ? "unblock" : "block"} {selectedCustomer.name}?
              </h2>
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
                onClick={selectedCustomer.status === "Blocked" ? unblockCustomer : blockCustomer}
              >
                Yes, {selectedCustomer.status === "Blocked" ? "Unblock" : "Block"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoustomerPage;
