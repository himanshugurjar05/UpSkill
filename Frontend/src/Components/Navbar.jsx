import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  Mail,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

useEffect(() => {
  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setIsLoggedIn(true);
        setUserData(storedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  checkLogin();

  window.addEventListener("userLoggedIn", checkLogin);
  return () => window.removeEventListener("userLoggedIn", checkLogin);
}, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://lwfiles.mycourse.app/school157292-public/ad0d80f23f2c69a13f3da5c26c8f7588.png"
            alt="UpSkillX Logo"
            className="h-12 w-auto invert brightness-75"
          />
        </Link>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-blue-200 flex items-center gap-1">
            <Home size={18} /> Home
          </Link>
          <Link to="/courses" className="text-white hover:text-blue-200 flex items-center gap-1">
            <BookOpen size={18} /> Courses
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-200 flex items-center gap-1">
            <Mail size={18} /> Contact
          </Link>

          {isLoggedIn && userData ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-indigo-600 transition"
              >
                <img
                  src={userData.profilePicture || userData.picture || userData.imageUrl}
                  alt={userData.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />

                <span className="text-white">{userData.name}</span>
                <ChevronDown size={20} className="text-white" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link to="/my-profile" className="block px-4 py-2 text-sm hover:bg-indigo-50 flex items-center gap-2 text-gray-700">
                    <User size={16} /> Profile
                  </Link>
                  <Link to="/my-courses" className="block px-4 py-2 text-sm hover:bg-indigo-50 flex items-center gap-2 text-gray-700">
                    <BookOpen size={16} /> My Courses
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-indigo-50 flex items-center gap-2 text-gray-700">
                    <Settings size={16} /> Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" className="bg-white text-indigo-700 px-4 py-2 rounded-md hover:bg-blue-100 shadow-md">
                Login
              </Link>
              <Link to="/signup" className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-800 shadow-md">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block text-white hover:text-blue-200 flex items-center gap-1">
            <Home size={18} /> Home
          </Link>
          <Link to="/courses" className="block text-white hover:text-blue-200 flex items-center gap-1">
            <BookOpen size={18} /> Courses
          </Link>
          <Link to="/contact" className="block text-white hover:text-blue-200 flex items-center gap-1">
            <Mail size={18} /> Contact
          </Link>

          {isLoggedIn && userData ? (
            <>
              <Link to="/my-profile" className="block text-white hover:text-blue-200 flex items-center gap-1">
                <User size={18} /> Profile
              </Link>
              <Link to="/my-courses" className="block text-white hover:text-blue-200 flex items-center gap-1">
                <BookOpen size={18} /> My Courses
              </Link>
              <Link to="/settings" className="block text-white hover:text-blue-200 flex items-center gap-1">
                <Settings size={18} /> Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left text-red-200 hover:text-red-400 flex items-center gap-1"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-white hover:text-blue-200">
                Login
              </Link>
              <Link to="/signup" className="block text-white hover:text-blue-200">
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
