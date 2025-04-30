import React, { useState } from 'react';

function AddSubscription() {
    const [subscriptionName, setSubscriptionName] = useState('');
    const [price, setPrice] = useState('');
    const [validity, setValidity] = useState('');
    const [benefits, setBenefits] = useState(['']);
    const [newBenefit, setNewBenefit] = useState('');

    const handleBenefitChange = (index, event) => {
        const updatedBenefits = benefits.map((benefit, i) => (i === index ? event.target.value : benefit));
        setBenefits(updatedBenefits);
    };

    const handleAddBenefit = () => {
        setBenefits([...benefits, '']);
    };

    const handleSaveSubscription = () => {
        const subscriptionData = {
            subscriptionName,
            price,
            validity,
            benefits,
        };
        console.log('Saved Subscription:', subscriptionData);
        // Save the subscription data here (e.g., call an API or update state)
    };

    return (
        <div className="flex justify-center items-center px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Add Subscription</h1>
                <div className="space-y-6">
                    {/* Subscription Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Subscription name</label>
                        <input
                            type="text"
                            placeholder="Enter subscription name"
                            value={subscriptionName}
                            onChange={(e) => setSubscriptionName(e.target.value)}
                            className="w-full p-2 border-b-2 border-[#1EB9C6] mt-1"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="text"
                            placeholder="400 CHF"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full p-2 border-b-2 border-[#1EB9C6] mt-1"
                        />
                    </div>

                    {/* Validity */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Validity</label>
                        <input
                            type="date"
                            value={validity}
                            onChange={(e) => setValidity(e.target.value)}
                            className="w-full p-2 border-b-2 border-[#1EB9C6] mt-1"
                        />
                    </div>

                    {/* Benefits */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Benefits</label>
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={benefit}
                                    onChange={(e) => handleBenefitChange(index, e)}
                                    placeholder="Benefit"
                                    className="w-full p-2 border-b-2 border-[#1EB9C6] mt-1"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddBenefit}
                            className="mt-2 text-[#1EB9C6] hover:text-teal-600"
                        >
                            + Add another benefit
                        </button>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleSaveSubscription}
                            className="px-6 py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600"
                        >
                            Save Subscription
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSubscription;
