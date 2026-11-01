import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Slices/UserInfoSlice';
import { UserInfoSlice } from '../Slices/UserInfoSlice';


const items = [
  {
    key: 'sub1',
    label: 'Dasboard',
 icon: <AppstoreOutlined />,
  
  },
  {
    key: 'sub2',
    label: 'Products',
    icon: <MailOutlined />,
    children: [
      { key: 'createproduct', label: 'Create Products' },
      { key: 'viewproduct', label: 'View Products' },
   
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Varaints',
    icon: <SettingOutlined />,
    children: [
      { key: 'createVarient', label: 'Create Varient' },
      { key: 'viewVarient', label: 'View Varient' },
  
    ],
  },
   {
    type: 'divider',
  },
  {
    key: 'sub5',
    label: 'Categerory',
    icon: <SettingOutlined />,
    children: [
      { key: 'createCategeroy', label: 'Create categroey' },
      { key: 'viewCategeroy', label: 'View categroey' },
  
    ],
  },
    {
    type: 'divider',
  },
  {
    key: 'sub6',
    label: 'SubCategerory',
    icon: <SettingOutlined />,
    children: [
      { key: 'createSubCategeroy', label: 'Create Subcategroey' },
      { key: 'viewsubcategeroy', label: 'View Subcategroey' },
  
    ],
  },
    {
    type: 'divider',
  },
  {
    key: 'sub7',
    label: 'discount',
    icon: <SettingOutlined />,
    children: [
      { key: 'createDiscount', label: 'Create  Discount' },
      { key: 'viewDiscount', label: 'View  Discount' },
  
    ],
  },

];
const SideBar = () => {
  const navigate=useNavigate()
  const onClick = e => {
    // console.log( e.key);
    navigate(e.key)
  };
  let data=useSelector(state=>state.userInfo.value)
  let dispatch=useDispatch()
  let handleLogout=()=>{
    dispatch(logout(JSON.stringify(data.data)))
    navigate("/login")
    
  }
  return (
    <div className='flex flex-col justify-between h-screen' >

      <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    <div className='mx-4 w-[50%]' >
      <div className='flex items-center gap-x-3' >
      <div className='bg-amber-400  border border-red-200 w-8 h-8 rounded-full' ></div>
   <div >
       <h2 className='text-sm font-medium' >Bijoy Saha Tonmoy</h2>
      <p >Users</p>
   </div>
    </div>
    <h4 onClick={handleLogout} className=' px-10 py-3 text-xl font-bold cursor-pointer ' >Logout</h4>
    </div>
    </div>
  )
}

export default SideBar