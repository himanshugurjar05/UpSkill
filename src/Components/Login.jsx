

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import usePageTitle from '../hooks/use_page_title'
import useAuthStore from "../store/authStore";

export default function Login() {
  let navigate = useNavigate();
  usePageTitle({title: 'Login'});
  const login = useAuthStore((state) => state.login);
  
  let [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let Res = await axios.post('http://localhost:5500/api/user/login', formData);

      console.log(Res.data);

      if (Res.data.token) {
        localStorage.setItem('token', Res.data.token);
        localStorage.setItem('user', JSON.stringify(Res.data.user));
        login()
        navigate("/");
      } else {
        alert(Res.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.response.data.message);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Log In</h2>
          <p className="mt-2 text-sm text-gray-600">Access your account</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="text" 
                name="email" 
                id="email"
                placeholder="Enter your email..." 
                value={formData.email} 
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              />
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password"
                placeholder="Enter your password..." 
                value={formData.password} 
                onChange={handleChange} 
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <button 
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </Link>
          </div>
          <div className="text-sm">
            <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}