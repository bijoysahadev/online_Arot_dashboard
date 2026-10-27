import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  logout } from '../src/Slices/UserInfoSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate()
   let data = useSelector(state=>(state.userInfo.value)
  )
   let dispatch=useDispatch()
  let handleLogout =()=> {
   dispatch(logout(JSON.stringify(data.data)))
  navigate("/login")
}

  useEffect(()=>{
   if(data==null){
 navigate("/login")   
   }
   },[data])

  return (
   <div className='flex justify-center items-center' >
     <div className='flex flex-col items-center justify-center w-[300px] h-[400px] border border-gray-50 shadow-2xl rounded-2xl]  ' >
      <div className='w-14 h-14 rounded-full bg-red-400' >
      
      </div>
        <h5>Name : sadf</h5>
      <h5>Email :sadaS </h5>
  <h4 onClick={handleLogout} className='font-bold cursor-pointer' >Log Out</h4>

    </div>
   </div>
  )
}

export default Home