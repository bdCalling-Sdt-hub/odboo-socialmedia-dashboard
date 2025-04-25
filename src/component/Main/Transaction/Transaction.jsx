// // src/components/TransactionList.jsx

import React from "react";
import { Link } from "react-router-dom";

const TransactionList = () => {
    const transactions = [
        { userName: "Anika Alam", providerName: "Khairul", serviceName: "Plumbing", subscriptionPackage: "-", amount: "150 CHF", date: "10 February, 2025" },
        { userName: "Anika Alam", providerName: "-", serviceName: "-", subscriptionPackage: "General", amount: "150 CHF", date: "10 February, 2025" },
        { userName: "Anika Alam", providerName: "Khairul", serviceName: "Plumbing", subscriptionPackage: "-", amount: "150 CHF", date: "10 February, 2025" },
        { userName: "Anika Alam", providerName: "-", serviceName: "-", subscriptionPackage: "General", amount: "150 CHF", date: "10 February, 2025" },
        { userName: "Anika Alam", providerName: "Khairul", serviceName: "Plumbing", subscriptionPackage: "-", amount: "150 CHF", date: "10 February, 2025" },
        { userName: "Anika Alam", providerName: "Khairul", serviceName: "Plumbing", subscriptionPackage: "-", amount: "150 CHF", date: "10 February, 2025" },
        { userName: "Anika Alam", providerName: "-", serviceName: "-", subscriptionPackage: "General", amount: "150 CHF", date: "10 February, 2025" }
    ];

    return (
        <div className="w-full container mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-6">All Transaction List</h1>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full ">
                    <thead className="bg-[#1EB9C6] text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">User Name</th>
                            <th className="py-2 px-4 text-left">Provider Name</th>
                            <th className="py-2 px-4 text-left">Service Name</th>
                            <th className="py-2 px-4 text-left">Subscription Package Name</th>
                            <th className="py-2 px-4 text-left">Amount</th>
                            <th className="py-2 px-4 text-left">Date</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4">{transaction.userName}</td>
                                <td className="py-2 px-4">{transaction.providerName}</td>
                                <td className="py-2 px-4">{transaction.serviceName}</td>
                                <td className="py-2 px-4">{transaction.subscriptionPackage}</td>
                                <td className="py-2 px-4">{transaction.amount}</td>
                                <td className="py-2 px-4">{transaction.date}</td>
                                <Link to='/transcation-details'>
                                    <td className="py-2 px-4 text-center">
                                        <button className="text-teal-600 hover:text-teal-800">👁️</button>
                                    </td>
                                </Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionList;





// src/components/TransactionList.jsx


