

import { useState, useEffect, useRef } from "react";
import { FiBell, FiMenu, FiLogOut } from "react-icons/fi";
import { Image } from "antd";
import { useGetUserQuery } from "../../../redux/features/setting/settingApi";
import { ImageBaseUrl } from "../../../redux/blog/blogImageApi";
import { useGetNotificationQuery } from "../../../redux/features/notification/notificatioin";
import { Link, useLocation } from "react-router-dom";  // Import Link and useLocation
import logo from "../../../assets/auth/Logo.png";

const Header = ({ toggleSidebar }) => {
  const { data } = useGetUserQuery({});
  const user = data?.data.attributes;
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  // Fetch notifications
  const { data: notificationData } = useGetNotificationQuery();
  const notifications = notificationData?.data?.attributes || [];

  const location = useLocation(); // Get the current location

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getFullImageUrl = (path) => {
    if (!path) return "/default-image.jpg";
    if (path.startsWith("http")) return path;
    return `${ImageBaseUrl}${path}`;
  };

  const isActiveLink = (path) => location.pathname === path; // Check if the link is active

  return (
    <div className="w-full container mx-auto bg-white flex items-center py-3 px-5 relative border-t-2">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Image src={logo}></Image>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-10 mx-auto">
        <Link
          to="/"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/") ? "border border-[#1EB9C6]" : ""}`}
        >
          Overview,Überblick
        </Link>
        <Link
          to="/Customer"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/session") ? "border-b-2 border-[#C2F84D]" : ""}`}
        >
          Customer,Kunde 
        </Link>
        <Link
          to="/Company"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/profile") ? "border-b-2 border-[#C2F84D]" : ""}`}
        >
          Company,Unternehmen 
        </Link>
        <Link
          to="/personal-provider"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/user") ? "border-b-2 border-[#C2F84D]" : ""}`}
        >
           Personal Provider, Persönlicher Anbieter 
        </Link>
        <Link
          to="/ Services"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/user") ? "border-b-2 border-[#C2F84D]" : ""}`}
        >
           Services, Dienstleistungen 
        </Link>
        <Link
          to="/ Bookings"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/user") ? "border-b-2 border-[#C2F84D]" : ""}`}
        >
           Bookings, Buchungen  
        </Link>
        <Link
          to="/ Transactions"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/user") ? "border-b-2 border-[#C2F84D]" : ""}`}
        >
           Transactions, Transaktionen   
        </Link>
        <Link
          to="/setting"
          className={`text-gray-500 font-bold hover:text-black ${isActiveLink("/setting") ? "border-b-2 border-[#C2F84D]" : ""}`}
        >
          Settings,Einstellungen 
        </Link>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-5 relative">
        {/* Notification Bell */}
        <div className="relative">
          <FiBell
            className="text-[#AEF84D] text-2xl rounded-full cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {notifications.length}
            </span>
          )}

          {/* Notification Dropdown */}
          {showNotifications && (
            <div
              ref={notificationRef}
              className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50"
            >
              <div className="p-3 border-b font-semibold text-gray-600">Notifications</div>
              {notifications.length > 0 ? (
                <div className="max-h-60 overflow-y-auto">
                  {notifications.map((notif, index) => (
                    <div key={index} className="px-3 py-2 text-sm border-b last:border-none hover:bg-gray-100 flex items-start">
                      <div className="flex items-center">
                        <div>
                          {notif?.user && (
                            <Image
                              src={getFullImageUrl(notif.user.profileImage)}
                              alt="Notif Avatar"
                              width={50}
                              height={50}
                              className="rounded-full mr-5"
                            />
                          )}
                        </div>
                        <div>
                          <h1 className="text-gray-800 font-bold">{notif?.user.fullName}</h1>
                          <p className="text-gray-800">{notif?.message || "New Notification"}</p>
                          <span className="text-gray-500 text-xs">
                            {notif?.createdAt
                              ? new Date(notif.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long" }) +
                                " " +
                                new Date(notif.createdAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })
                              : "Just now"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-3">No new notifications</p>
              )}
            </div>
          )}
        </div>

        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
          <Image
            src={getFullImageUrl(user?.profileImage)}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-lg w-full"
          />
        </div>

        {/* Logout Button */}
        <FiLogOut className="text-red-500 text-xl cursor-pointer hover:text-black" />
      </div>
    </div>
  );
};

export default Header;
