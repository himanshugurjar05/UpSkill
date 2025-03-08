import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function EnrollCourses() {
    let { cid } = useParams()
    const [enrollcourses, setEnrollcourses] = useState([])

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            return;
        }

        async function getdata() {
            let Res = await axios.get(`http://localhost:5500/api/course/${cid}`, {
                headers: { 'Authorization': token }
            })
            // console.log(Res.data)
            setEnrollcourses(Res.data)
        }
        getdata()
    }, [])

    

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">Available Course</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div key={enrollcourses._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
                    <div className="h-48 overflow-hidden">
                        <img 
                            src={enrollcourses.poster} 
                            alt={enrollcourses.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{enrollcourses.name}</h3>
                        <div className="flex justify-between items-center mb-4">
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                {enrollcourses.duration}
                            </span>
                            <span className="text-lg font-bold text-indigo-600">
                                ${enrollcourses.price}
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3">{enrollcourses.description}</p>
                        <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}