



// import React, { useState } from 'react';

// function Settings() {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         phone: '',
//     });

//     const [activeTab, setActiveTab] = useState('general'); // State for active tab

//     const [isEditing, setIsEditing] = useState({
//         privacyPolicy: false,
//         termsConditions: false,
//         aboutUs: false,
//     });

//     const [textContent, setTextContent] = useState({
//         privacyPolicy: " We are a company committed to providing the best service in the industry. Our mission is to offer top-quality products and services to our customers, and we pride ourselves on our customer satisfaction. Our team is dedicated to continuous improvement and innovation, ensuring that we meet the ever-evolving needs of the market.",
//         termsConditions: " We are a company committed to providing the best service in the industry. Our mission is to offer top-quality products and services to our customers, and we pride ourselves on our customer satisfaction. Our team is dedicated to continuous improvement and innovation, ensuring that we meet the ever-evolving needs of the market.",
//         aboutUs: " We are a company committed to providing the best service in the industry. Our mission is to offer top-quality products and services to our customers, and we pride ourselves on our customer satisfaction. Our team is dedicated to continuous improvement and innovation, ensuring that we meet the ever-evolving needs of the market.",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleTextChange = (e, section) => {
//         const { value } = e.target;
//         setTextContent({
//             ...textContent,
//             [section]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Submitted', formData);
//     };

//     const toggleEdit = (section) => {
//         setIsEditing((prevState) => ({
//             ...prevState,
//             [section]: !prevState[section],
//         }));
//     };

//     return (
//         <div className='w-full container mx-auto'>
//             <div className="flex">
//                 {/* Left Side Settings */}
//                 <div className="w-1/4 text-black p-4">
//                     <h2 className="text-3xl font-bold mb-4">Settings</h2>
//                     <ul>
//                         <li
//                             className={`mb-2 p-2 rounded ${activeTab === 'general' ? 'bg-[#AEF84D]' : ''}`}
//                             onClick={() => setActiveTab('general')}
//                         >
//                             General
//                         </li>
//                         <li
//                             className={`mb-2 p-2 rounded ${activeTab === 'password' ? 'bg-[#AEF84D]' : ''}`}
//                             onClick={() => setActiveTab('password')}
//                         >
//                             Password
//                         </li>
//                         <li
//                             className={`mb-2 p-2 rounded ${activeTab === 'privacyPolicy' ? 'bg-[#AEF84D]' : ''}`}
//                             onClick={() => setActiveTab('privacyPolicy')}
//                         >
//                             Privacy Policy
//                         </li>
//                         <li
//                             className={`mb-2 p-2 rounded ${activeTab === 'termsConditions' ? 'bg-[#AEF84D]' : ''}`}
//                             onClick={() => setActiveTab('termsConditions')}
//                         >
//                             Terms & Conditions
//                         </li>
//                         <li
//                             className={`mb-2 p-2 rounded ${activeTab === 'aboutUs' ? 'bg-[#AEF84D]' : ''}`}
//                             onClick={() => setActiveTab('aboutUs')}
//                         >
//                             About Us
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Main Content (Form or Content) */}
//                 <div className="w-2/4 p-8">
//                     {activeTab === 'general' && (
//                         <>
//                             <h1 className="text-3xl font-semibold mb-6">User Information Form</h1>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="mb-4">
//                                     <label htmlFor="username" className="block text-lg font-medium">Username</label>
//                                     <input
//                                         type="text"
//                                         id="username"
//                                         name="username"
//                                         value={formData.username}
//                                         onChange={handleChange}
//                                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="email" className="block text-lg font-medium">Email</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="phone" className="block text-lg font-medium">Phone Number</label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full mt-4 py-2 px-6 bg-[#AEF84D] text-white rounded-md"
//                                 >
//                                     Submit
//                                 </button>
//                             </form>
//                         </>
//                     )}

//                     {activeTab === 'password' && (
//                         <>
//                             <h1 className="text-3xl font-semibold mb-6">Change Password</h1>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="mb-4">
//                                     <label htmlFor="currentPassword" className="block text-lg font-medium">Current Password</label>
//                                     <input
//                                         type="password"
//                                         id="currentPassword"
//                                         name="currentPassword"
//                                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="newPassword" className="block text-lg font-medium">New Password</label>
//                                     <input
//                                         type="password"
//                                         id="newPassword"
//                                         name="newPassword"
//                                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="confirmPassword" className="block text-lg font-medium">Confirm New Password</label>
//                                     <input
//                                         type="password"
//                                         id="confirmPassword"
//                                         name="confirmPassword"
//                                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full mt-4 py-2 px-6 bg-[#AEF84D] text-white rounded-md"
//                                 >
//                                     Change Password
//                                 </button>
//                             </form>
//                         </>
//                     )}

//                     {activeTab === 'privacyPolicy' && (
//                         <>
//                             <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
//                             {isEditing.privacyPolicy ? (
//                                 <textarea
//                                     value={textContent.privacyPolicy}
//                                     onChange={(e) => handleTextChange(e, 'privacyPolicy')}
//                                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     rows={5}
//                                 />
//                             ) : (
//                                 <p className="text-lg">{textContent.privacyPolicy}</p>
//                             )}
//                             <button
//                                 type="button"
//                                 onClick={() => toggleEdit('privacyPolicy')}
//                                 className="mt-4 py-2 px-6 bg-[#AEF84D] text-black rounded-md font-bold"
//                             >
//                                 {isEditing.privacyPolicy ? 'Save' : 'Edit'}
//                             </button>
//                         </>
//                     )}

//                     {activeTab === 'termsConditions' && (
//                         <>
//                             <h1 className="text-3xl font-semibold mb-6">Terms & Conditions</h1>
//                             {isEditing.termsConditions ? (
//                                 <textarea
//                                     value={textContent.termsConditions}
//                                     onChange={(e) => handleTextChange(e, 'termsConditions')}
//                                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     rows={5}
//                                 />
//                             ) : (
//                                 <p className="text-lg">{textContent.termsConditions}</p>
//                             )}
//                             <button
//                                 type="button"
//                                 onClick={() => toggleEdit('termsConditions')}
//                                 className="mt-4 py-2 px-6 bg-[#AEF84D] text-black rounded-md font-bold"
//                             >
//                                 {isEditing.termsConditions ? 'Save' : 'Edit'}
//                             </button>
//                         </>
//                     )}

//                     {activeTab === 'aboutUs' && (
//                         <>
//                             <h1 className="text-3xl font-semibold mb-6">About Us</h1>
//                             {isEditing.aboutUs ? (
//                                 <textarea
//                                     value={textContent.aboutUs}
//                                     onChange={(e) => handleTextChange(e, 'aboutUs')}
//                                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     rows={5}
//                                 />
//                             ) : (
//                                 <p className="text-lg">{textContent.aboutUs}</p>
//                             )}
//                             <button
//                                 type="button"
//                                 onClick={() => toggleEdit('aboutUs')}
//                                 className="mt-4 py-2 px-6 bg-[#AEF84D] text-black rounded-md font-bold"
//                             >
//                                 {isEditing.aboutUs ? 'Save' : 'Edit'}
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Settings;



import React from 'react';
import { Link } from 'react-router-dom';

function Setting() {
    return (
        <div className="w-full container mx-auto ">

            <div className="p-4">
                <div className="space-y-4">
                    <Link to='/subscription'><button className="w-full text-left bg-blue-200 p-2 rounded-md hover:bg-blue-300">Subscription</button></Link>
                    <Link to='/general-setting'> <button className="w-full text-left bg-blue-200 p-2 rounded-md hover:bg-blue-300 mt-5">General Settings</button></Link>
                    <Link to='/change-password'><button className="w-full text-left bg-blue-200 p-2 rounded-md hover:bg-blue-300 mt-5">Password Change</button></Link>
                    <Link to='/about-us'><button className="w-full text-left bg-blue-200 p-2 rounded-md hover:bg-blue-300 mt-5">About Us</button></Link>
                    <Link to='/trams-condition'><button className="w-full text-left bg-blue-200 p-2 rounded-md hover:bg-blue-300 mt-5">Terms & Condition</button></Link>
                   <Link to='/privacy-policy'><button className="w-full text-left bg-blue-200 p-2 rounded-md hover:bg-blue-300 mt-5">Privacy Policy</button></Link>
                </div>
            </div>



        </div>
    );
}

export default Setting;
