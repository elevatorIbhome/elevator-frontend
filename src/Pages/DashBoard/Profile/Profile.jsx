import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaStar, FaBell } from 'react-icons/fa';

const Profile = () => {
    const [formData, setFormData] = useState({
    firstName: 'dev',
    lastName: 'malik',
    email: 'devmalik0786@gmail.com',
    password: '',
    newsletter: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // Add your update logic here
  };
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-8">

            {/* Avatar with Decorative Border */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                  <FaUser className="w-12 h-12 text-white" />
                </div>
                {/* Animated Decorative Dots */}
                <div className="absolute inset-0 -m-4 pointer-events-none">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-medium">First Name <span className="text-red-500">*</span></span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaUser className="w-4 h-4 opacity-70" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="grow"
                      placeholder="First Name"
                      required
                    />
                  </label>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-medium">Last Name <span className="text-red-500">*</span></span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaUser className="w-4 h-4 opacity-70" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="grow"
                      placeholder="Last Name"
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Email & Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Email Address <span className="text-red-500">*</span></span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaEnvelope className="w-4 h-4 opacity-70" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="grow"
                      placeholder="email@example.com"
                      required
                    />
                  </label>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-medium">New Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaLock className="w-4 h-4 opacity-70" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="grow"
                      placeholder="••••••"
                    />
                  </label>
                </div>
              </div>

              {/* Membership Info */}
              <div className="text-center py-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">Membership</span>
                </div>
                <p className="text-lg font-semibold text-primary">
                  Regional Most Popular @30 okt. 2026
                </p>
              </div>

              {/* Newsletter Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className="label-text">Newsletter Subscriber</span>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="toggle toggle-success"
                />
                <span className="label-text">
                  {formData.newsletter ? (
                    <span className="text-success">Yes</span>
                  ) : (
                    <span className="text-error">No</span>
                  )}
                </span>
              </div>

              {/* Submit Button */}
              <div className="card-actions justify-center mt-8">
                <button type="submit" className="btn btn-primary btn-wide">
                  <FaBell className="w-4 h-4" />
                  Update Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;