import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Flex, Space, Table, Tag } from 'antd';

const ViewCategeroy =  () => {
  let [data,setData]=useState()
const columns = [
 
    {
    title: 'serial',
    dataIndex: 'serial',
  
    render:(item,arr,index) => <a>{index+1}</a>,
  },
    {
    title: 'Owner',
    dataIndex: 'key',
   
    render:(item,arr,index) => <a>{item}</a>,
  },

  
  {
    title: 'Name',
    dataIndex: 'name',
  
    render: text => <a>{text}</a>,
  },


 
  {
    title: 'Action',
 
    render: (_, record) => (
      <Space size="medium">
        <a>Edit </a>
        <a>Delete</a>
      </Space>
    ),
  },
];




  useEffect(  ()=>{
 async function allcategory(){
   let data = await axios.get("http://localhost:3000/api/v1/product/viewcateogory")
    console.log(data.data);
let arr=[]
    data.data.map(item=>{
      arr.push({
         
    key: item.categoryownerid.userName,
    name: item.categoryname,
   

  
  
      })
    
      // console.log(item.categoryname);
      
    })
      setData(arr)
 }

 allcategory()
 
 
  },[])
  return (
    <div className='mr-10 mt-4' >
      <h1 className=' mb-4 text-center font-bold text-4xl text-black ' >All Categories</h1>
      <Table columns={columns} dataSource={data} /></div>
  )
}

export default ViewCategeroy