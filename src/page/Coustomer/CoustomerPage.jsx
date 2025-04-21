import React, { useState } from "react";

const CoustomerPage = () => {
  const [customers, setCustomers] = useState([
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Aktiv" },
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Blocked" },
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Aktiv" },
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Aktiv" },
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Aktiv" },
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Aktiv" },
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Aktiv" },
    { name: "Khairul Bashar", email: "abc@gmail.com", dateJoined: "2 March, 2025", bookings: 14, status: "Aktiv" },
  ]);

  return (
    <div className=" w- full container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">All Customers</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-teal-500 text-white">
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
                <span className={`px-3 py-1 rounded-full ${customer.status === "Blocked" ? "bg-red-500 text-white" : "bg-teal-500 text-white"}`}>
                  {customer.status}
                </span>
              </td>
              <td className="p-3">
                <button className="text-teal-500 hover:text-teal-700">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoustomerPage;
