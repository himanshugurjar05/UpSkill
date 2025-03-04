import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Navbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const userData = useAuthStore((state) => state.userData);
  const logout = useAuthStore((state) => state.logout);
  // const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       // const storedUser = JSON.parse(localStorage.getItem("user"));
  //       // setIsLoggedIn(true);
  //       setUserData(storedUser);
  //     } catch (error) {
  //       console.error("Error parsing user data:", error);
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("user");
  //     }
  //   }
  // }, [userData]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // setIsLoggedIn(false);
    // setUserData(null);
    logout()
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <h1 className="text-white text-3xl font-bold tracking-wide">
            Learners
          </h1>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-blue-200 font-medium transition duration-300 px-2"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-white hover:text-blue-200 font-medium transition duration-300 px-2"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-200 font-medium transition duration-300 px-2 mr-2"
          >
            Contact
          </Link>

          {isLoggedIn && userData ? (
            <div className="flex items-center space-x-3">
              {userData.profilePicture && (
                <img 
                  src={userData.profilePicture} 
                  alt={userData.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <span className="text-white font-medium">{userData.name}</span>
              <button 
                onClick={handleLogout}
                className="bg-gray-900 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button className="bg-white text-indigo-700 hover:bg-blue-100 px-4 py-2 rounded-md font-medium transition duration-300 shadow-md">
                <Link to="/login" className="text-current">
                  Login
                </Link>
              </button>

              <button className="bg-indigo-900 text-white hover:bg-indigo-800 px-4 py-2 rounded-md font-medium transition duration-300 shadow-md border border-white">
                <Link to="/signup" className="text-current">
                  Signup
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}