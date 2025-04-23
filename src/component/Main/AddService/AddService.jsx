import React, { useState } from 'react';

const AddService = () => {
    const [serviceTitle, setServiceTitle] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle service publishing
        console.log('Service Title:', serviceTitle);
        console.log('Service Image:', image);
    };

    return (
        <div className="max-w-lg mx-auto bg-white  border border-[#1EB9C6] rounded-lg p-8 mt-12 relative">
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700">
                <span className="font-semibold">×</span>
            </button>

            <h2 className="text-2xl font-semibold mb-6">Service Information</h2>

            <form onSubmit={handleSubmit}>
                {/* Service Title Input */}
                <div className="mb-6">
                    <label htmlFor="serviceTitle" className="block text-sm font-medium text-gray-700">Service Title</label>
                    <input
                        type="text"
                        id="serviceTitle"
                        value={serviceTitle}
                        onChange={(e) => setServiceTitle(e.target.value)}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1EB9C6]"
                        placeholder="Enter Service Title"
                        required
                    />
                </div>

                {/* Service Image Upload */}
                <div className="mb-6">
                    <label htmlFor="serviceImage" className="block text-sm font-medium text-gray-700">Service Image</label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 p-4 rounded-lg flex justify-center items-center">
                        <div className="text-center">
                            <p className="text-sm text-gray-600">Choose a file or drag & drop it here</p>
                            <p className="text-xs text-gray-500">PNG, JPG & JPEG formats, up to 50MB</p>
                            <input
                                type="file"
                                id="serviceImage"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleImageChange}
                                className="mt-2 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-transparent file:text-sm file:font-semibold file:bg-teal-500 file:text-white file:rounded-lg hover:file:bg-teal-600"
                            />
                        </div>
                    </div>
                </div>

                {/* Publish Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#1EB9C6] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-200"
                    >
                        Publish Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;
