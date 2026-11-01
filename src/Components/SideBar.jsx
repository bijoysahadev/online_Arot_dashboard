import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';



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
  return (
    <>
    
      <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </>
  )
}

export default SideBar