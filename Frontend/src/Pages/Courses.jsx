import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const API_URI = import.meta.env.VITE_API_URI;

export default function Courses() { 
  const navigate = useNavigate();
  const [card, setcard] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    async function getdata() {
      const Res = await axios.get(`${API_URI}/courses`, {
        headers: { Authorization: token }
      });
      setcard(Res.data);
    }

    getdata();
  }, []);

  return (
    <>
      {/* ✅ Full-Width Main Section */}
      <div className="w-full px-6 py-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            card.map((c) => (
              <div
                key={c._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <img
                  src={c.poster}
                  alt={c.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-green-600 font-bold">{c.duration}</span>
                    <span className="text-blue-600 font-bold text-lg">${c.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{c.description}</p>
                  <button
                    onClick={() => navigate(`/Courses/enroll/${c._id}`)}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* ✅ Full-Width Footer */}
      <footer className="w-full bg-gray-900 text-white pt-16 pb-8 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">UpSkillX</h3>
              <p className="text-gray-400 mb-6">
                Empowering individuals to master new skills and advance their careers through quality online education.
              </p>
              <div className="flex space-x-4">
                <a className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Categories</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">Development</li>
                <li className="text-gray-400">Business</li>
                <li className="text-gray-400">Data Science</li>
                <li className="text-gray-400">Design</li>
                <li className="text-gray-400">Marketing</li>

              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2025 UpSkillX. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                  <li className="text-gray-400 hover:text-white text-sm">Privacy Policy</li>
                  <li className="text-gray-400 hover:text-white text-sm">Terms of Service</li>
                  <li className="text-gray-400 hover:text-white text-sm">FAQ</li>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
