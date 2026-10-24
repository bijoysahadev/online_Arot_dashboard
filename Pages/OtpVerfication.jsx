import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const OtpVerfication = () => {
  const params=useParams()
  console.log(params.email);
console.log(params.otp);


  

  let navigate=useNavigate()

useEffect(()=>{
async function mydata (){
  let data = await axios.post('http://localhost:3000/api/v1/authentication/Otp',{

  email:params.email,
  otp:params.otp
})
if(data.data.success=="Otp match") {
  navigate("/login")
}
}
mydata()
},[])





  return (
    <div>
      
<div><h1>Verfication loading.....</h1></div>
  <Toaster/>
    </div>
  )
}

export default OtpVerfication
// 






// 