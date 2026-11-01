import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  logout } from '../src/Slices/UserInfoSlice'
import { Outlet, useNavigate } from 'react-router-dom'
import { Col, Row } from 'antd';
import SideBar from '../src/Components/SideBar';
const Dashboard = () => {
  let navigate=useNavigate()
   let data = useSelector(state=>(state.userInfo.value)
  )
   let dispatch=useDispatch()
//   let handleLogout =()=> {
//    dispatch(logout(JSON.stringify(data.data)))
//   navigate("/login")
// }

  useEffect(()=>{
   if(data==null){
 navigate("/login")   
   }
   },[data])

  return (
  <>
 <Row>
      <Col span={6}>
<SideBar/>
      </Col>
      <Col span={18}><Outlet/></Col>
    </Row>
  </>
  )
}

export default Dashboard