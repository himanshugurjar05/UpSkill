import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Courses() {
  let navigate = useNavigate();
  let [card, setcard] = useState([])


  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(!token){
      return;
    }
    
       async function getdata() {
            let Res = await axios.get('http://localhost:5500/api/course',{
                headers: {'Authorization':token}
            })
            setcard(Res.data)
       }
       getdata()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Courses</h2>
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
                <button onClick={()=>{
                  navigate(`/Courses/enroll/${c._id}`)
                }} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}