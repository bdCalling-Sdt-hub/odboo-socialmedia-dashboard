import React, { useState } from 'react';

function PasswordChange() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'old') {
            setShowOldPassword(!showOldPassword);
        } else if (field === 'new') {
            setShowNewPassword(!showNewPassword);
        } else if (field === 'confirm') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            alert('Password updated successfully!');
        } else {
            alert('Passwords do not match.');
        }
    };

    return (
        <div className="  flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-semibold text-center mb-6">PASSWORD CHANGE</h2>
                <form onSubmit={handleSubmit}>
                    {/* Old Password Field */}
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-700">Old Password</label>
                        <div className="flex items-center mt-1">
                            <input
                                type={showOldPassword ? 'text' : 'password'}
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter old password"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('old')}
                                className="ml-2 text-gray-500"
                            >
                                👁️
                            </button>
                        </div>
                    </div>

                    {/* New Password Field */}
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-700">New Password</label>
                        <div className="flex items-center mt-1">
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter new password"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('new')}
                                className="ml-2 text-gray-500"
                            >
                                👁️
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                        <div className="flex items-center mt-1">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-2 border rounded-md"
                                placeholder="Confirm your password"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('confirm')}
                                className="ml-2 text-gray-500"
                            >
                                👁️
                            </button>
                        </div>
                    </div>

                    {/* Update Password Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#1EB9C6] text-white rounded-md hover:bg-teal-600"
                    >
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PasswordChange;
