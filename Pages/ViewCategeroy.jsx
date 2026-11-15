import axios from 'axios'
import React, { useEffect } from 'react'


const ViewCategeroy =  () => {
  useEffect(  ()=>{
 async function allcategory(){
   let data = await axios.get("http://localhost:3000/api/v1/product/viewcateogory")
    console.log(data);
 }

 allcategory()
 
 
  },[])
  return (
    <div>ViewCategeroy</div>
  )
}

export default ViewCategeroy