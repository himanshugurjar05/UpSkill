import React from 'react'

import Navbar from './Components/Navbar'
import Home from './Pages/Home.jsx'
import Courses from './Pages/courses.jsx'
import Contact from './Pages/Contact.jsx'

import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
         <Navbar/>
         <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/courses'  element={<Courses/>}/>
            <Route path='/contact'  element={<Contact/>}/>
            
            <Route path='/login'  element={<Login/>}/>
            <Route path='/signup'  element={<Signup/>}/>
          </Routes>
         </div>
      </BrowserRouter>
    </div>
  )
}