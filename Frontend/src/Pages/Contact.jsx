import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      {/* Full Width Section */}
      <div className="w-full bg-gray-100">

        {/* Contact Header + Form */}
        <div className="w-full bg-white shadow-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-8 w-full">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold text-white">Contact Us</h1>
              <p className="mt-2 text-blue-100">We'd love to hear from you. Send us a message!</p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 w-full px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Connect with us</h2>
                <div className="mt-3 flex space-x-6">
                  <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">LinkedIn</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">GitHub</a>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900">Get in touch</h2>
                <dl className="mt-3 space-y-1 text-gray-700">
                  <dd className="flex">📧 contact@example.com</dd>
                  <dd className="flex mt-2">📞 (123) 456-7890</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  )
}
