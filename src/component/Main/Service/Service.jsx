



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import plumbing from '../../../assets/provider/plumbing.jpg';
// import delivary from '../../../assets/provider/delevary.jpg';
// import bar from '../../../assets/provider/bar.jpg';

// const ServiceCard = ({ service, onDelete }) => {
//     const [showModal, setShowModal] = useState(false);

//     const handleDelete = () => {
//         onDelete(service.id);
//         setShowModal(false);
//     };

//     return (
//         <div className="w-full container p-4">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img src={service.image} alt={service.name} className="w-full h-[400px] object-cover" />
//                 <div className="p-4">
//                     <h3 className="text-xl font-semibold">{service.name}</h3>
//                     <div className="flex items-center mt-2">
//                         <span className="text-sm text-green-500 bg-green-100 px-2 py-1 rounded-full">{service.status}</span>
//                     </div>
//                     <div className="mt-4 flex justify-between">
//                         <Link to={`/edit-service`}>
//                             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                                 Edit Service
//                             </button>
//                         </Link>
//                         <button
//                             onClick={() => setShowModal(true)}
//                             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//                         >
//                             Delete Service
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {showModal && (
//                 <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-lg">
//                         <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this service?</h2>
//                         <div className="flex justify-between">
//                             <button
//                                 onClick={() => setShowModal(false)}
//                                 className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleDelete}
//                                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// const ServiceList = () => {
//     const [services, setServices] = useState([
//         {
//             id: 1,
//             image: delivary,
//             name: 'Plumbing',
//             status: 'Available',
//         },
//         {
//             id: 2,
//             image: plumbing,
//             name: 'Delivery Service',
//             status: 'Available',
//         },
//         {
//             id: 3,
//             image: bar,
//             name: 'Bar Tending',
//             status: 'Available',
//         },
//     ]);

//     const navigate = useNavigate();

//     const handleDelete = (serviceId) => {
//         // Here you can call an API to delete the service or remove it from the state
//         setServices(services.filter(service => service.id !== serviceId));
//         alert('Service successfully deleted');
//     };

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="flex justify-between mb-8">
//                 <h1 className="text-3xl font-bold">All Personal Provider List</h1>
//                 <Link to='/add-service'>
//                     <button className="bg-[#1EB9C6] text-white px-4 py-2 rounded-lg hover:bg-teal-600">
//                         Add New Service
//                     </button>
//                 </Link>
//             </div>

//             <div className="flex lg:col-span-3 -m-4">
//                 {services.map((service, index) => (
//                     <ServiceCard key={index} service={service} onDelete={handleDelete} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ServiceList;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import plumbing from '../../../assets/provider/plumbing.jpg';
import delivary from '../../../assets/provider/delevary.jpg';
import bar from '../../../assets/provider/bar.jpg';

const ServiceList = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            image: delivary,
            name: 'Plumbing',
            status: 'Available',
        },
        {
            id: 2,
            image: plumbing,
            name: 'Delivery Service',
            status: 'Available',
        },
        {
            id: 3,
            image: bar,
            name: 'Bar Tending',
            status: 'Available',
        },
    ]);

    const [editService, setEditService] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [serviceToDelete, setServiceToDelete] = useState(null);

    const handleDelete = () => {
        setServices(services.filter(service => service.id !== serviceToDelete.id));
        setShowDeleteModal(false);
        alert('Service successfully deleted');
    };

    const handleEdit = (service) => {
        setEditService(service);
        setShowEditModal(true);
    };

    const handleSave = (updatedService) => {
        setServices(services.map(service => 
            service.id === updatedService.id ? updatedService : service
        ));
        setShowEditModal(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between mb-8">
                <h1 className="text-3xl font-bold">All Personal Provider List</h1>
                <Link to='/add-service'>
                    <button className="bg-[#1EB9C6] text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                        Add New Service
                    </button>
                </Link>
            </div>

            <div className="flex lg:col-span-3 -m-4">
                {services.map((service) => (
                    <div key={service.id} className="w-full container p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={service.image} alt={service.name} className="w-full h-[400px] object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{service.name}</h3>
                                <div className="flex items-center mt-2">
                                    <span className="text-sm text-green-500 bg-green-100 px-2 py-1 rounded-full">{service.status}</span>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <button onClick={() => handleEdit(service)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                        Edit Service
                                    </button>
                                    <button onClick={() => { setServiceToDelete(service); setShowDeleteModal(true); }} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                        Delete Service
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Service Modal */}
            {showEditModal && editService && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Edit Service</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleSave(editService); }}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Service Name</label>
                                <input
                                    type="text"
                                    value={editService.name}
                                    onChange={(e) => setEditService({ ...editService, name: e.target.value })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Service Status</label>
                                <select
                                    value={editService.status}
                                    onChange={(e) => setEditService({ ...editService, status: e.target.value })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                >
                                    <option>Available</option>
                                    <option>Unavailable</option>
                                </select>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowEditModal(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 ml-2"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && serviceToDelete && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this service?</h2>
                        <div className="flex justify-between">
                            <button onClick={() => setShowDeleteModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                Cancel
                            </button>
                            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceList;
