import React from 'react';

function AboutUs() {
    return (
        <div className="  flex justify-center items-center px-4 py-8">
            <div className="container bg-white p-8    w-full">
                <h1 className="text-4xl font-bold   mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-6">
                    We collect several types of information from and about users of our website and services, including:
                </p>
                <ul className="list-inside list-decimal pl-6   space-y-4">
                    <li>
                        <span className="font-semibold">Personal Information:</span> Information that identifies you personally, such as your name, email address, phone number, and any other identifier by which you may be contacted online or offline.
                    </li>
                    <li>
                        <span className="font-semibold">Non-Personal Information:</span> Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.
                    </li>
                    <li>
                        <span className="font-semibold">Non-Personal Information:</span> Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.
                    </li>
                    <li>
                        <span className="font-semibold">Non-Personal Information:</span> Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.
                    </li>
                    <li>
                        <span className="font-semibold">Non-Personal Information:</span> Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.
                    </li>
                    <li>
                        <span className="font-semibold">Non-Personal Information:</span> Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.
                    </li>
                </ul>
                <p className="text-lg text-gray-700 mt-6">
                    You have several rights concerning your personal data, including:
                </p>
                <ul className="list-inside list-decimal pl-6 text-gray-700 space-y-4">
                    <li><span className="font-semibold">Access and Updates:</span> The right to access and update your personal information.</li>
                    <li><span className="font-semibold">Delete:</span> The right to request that we delete your personal information.</li>
                    <li><span className="font-semibold">Opt-Out:</span> The right to opt-out of marketing communications.</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUs;
