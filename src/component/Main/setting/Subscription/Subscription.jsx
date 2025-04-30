// 




import React from 'react';
import { Link } from 'react-router-dom';

function SubscriptionPackages() {
    return (
        <div className="w-full container mx-auto relative flex justify-center items-center flex-col px-4 py-8">
            {/* Add New Service Button placed at the top-right corner */}
            <Link to='/add-subscription'><button className="absolute top-4 right-1 px-6 py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600">
                Add New Service
            </button>
            </Link>
            <h1 className="text-4xl font-semibold text-center mb-6">SUBSCRIPTION PACKAGES</h1>

            <div className="flex justify-center gap-8 flex-wrap">
                {/* Subscription Package Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h3 className="text-xl font-semibold mb-4">1 Month</h3>
                    <p className="text-lg text-[#1EB9C6] mb-4">2.50 CHF</p>
                    <p className="text-sm text-gray-700 mb-4">Per month</p>
                    <ul className="text-sm text-gray-700 mb-4">
                        <li>✔️ Your item goes here</li>
                        <li>✔️ Your item goes here</li>
                        <li>✔️ Your item goes here</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <button className="px-4 py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600">
                            Edit
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Subscription Package Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h3 className="text-xl font-semibold mb-4">1 Month</h3>
                    <p className="text-lg text-[#1EB9C6] mb-4">2.50 CHF</p>
                    <p className="text-sm text-gray-700 mb-4">Per month</p>
                    <ul className="text-sm text-gray-700 mb-4">
                        <li>✔️ Your item goes here</li>
                        <li>✔️ Your item goes here</li>
                        <li>✔️ Your item goes here</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <button className="px-4 py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600">
                            Edit
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Subscription Package Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h3 className="text-xl font-semibold mb-4">1 Month</h3>
                    <p className="text-lg text-[#1EB9C6] mb-4">2.50 CHF</p>
                    <p className="text-sm text-gray-700 mb-4">Per month</p>
                    <ul className="text-sm text-gray-700 mb-4">
                        <li>✔️ Your item goes here</li>
                        <li>✔️ Your item goes here</li>
                        <li>✔️ Your item goes here</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <button className="px-4 py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600">
                            Edit
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionPackages;
