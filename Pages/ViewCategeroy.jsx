import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Input, Modal, Popconfirm, Space, Table } from 'antd';
import toast, { Toaster } from 'react-hot-toast';

const ViewCategeroy =  () => {
  const [data, setData] = useState([])
  const [deletingCategoryId, setDeletingCategoryId] = useState(null)
  const [editingCategory, setEditingCategory] = useState(null)
  const [editedCategoryName, setEditedCategoryName] = useState('')
  const [updatingCategory, setUpdatingCategory] = useState(false)

  const handleEdit = (category) => {
    setEditingCategory(category)
    setEditedCategoryName(category.name)
  }

  const handleDelete = async (categoryId) => {
    setDeletingCategoryId(categoryId)
    try {
      await axios.delete(`http://localhost:3000/api/v1/product/deletecategory/${categoryId}`)
      setData(currentData => currentData.filter(item => item.key !== categoryId))
      toast.success('Category Deleted!')
    } catch (error) {
      toast.error(error.response?.data?.error || error.message || 'Failed to delete category')
    } finally {
      setDeletingCategoryId(null)
    }
  }

  const handleUpdate = async () => {
    const categoryName = editedCategoryName.trim()
    if (!categoryName || !editingCategory) {
      return
    }

    setUpdatingCategory(true)
    try {
      await axios.put(`http://localhost:3000/api/v1/product/updatecategory/${editingCategory.key}`, {
        categoryname: categoryName,
      })
      setData(currentData => currentData.map(item => (
        item.key === editingCategory.key ? { ...item, name: categoryName } : item
      )))
      setEditingCategory(null)
      toast.success('Category Updated!')
    } catch (error) {
      toast.error(error.response?.data?.error || error.message || 'Failed to update category')
    } finally {
      setUpdatingCategory(false)
    }
  }

const columns = [
 
    {
    title: 'serial',
    dataIndex: 'serial',
  
    render:(_item,_record,index) => <a>{index+1}</a>,
  },
    {
    title: 'Owner',
    dataIndex: 'ownername',
   
    render:(item) => <a>{item}</a>,
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
        <a onClick={() => handleEdit(record)}>Edit</a>
        <Popconfirm
          title="Delete this category?"
          description="This action cannot be undone."
          onConfirm={() => handleDelete(record.key)}
          okText="Delete"
          cancelText="Cancel"
          okButtonProps={{ loading: deletingCategoryId === record.key }}
        >
          <a>Delete</a>
        </Popconfirm>
      </Space>
    ),
  },
];





  useEffect(  ()=>{
 async function allcategory(){
   try {
     let response = await axios.get("http://localhost:3000/api/v1/product/viewcateogory")
     let arr = response.data.map(item => ({
       ownername: item.categoryownerid.userName,
       key: item._id,
       name: item.categoryname,
     }))
     setData(arr)
   } catch (error) {
     toast.error(error.response?.data?.error || error.message || 'Failed to load categories')
   }
 }

 allcategory()
 
 
  },[])
  return (
    <div className='mr-10 mt-4' >
      <h1 className=' mb-4 text-center font-bold text-4xl text-black ' >All Categories</h1>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit Category"
        open={Boolean(editingCategory)}
        onOk={handleUpdate}
        onCancel={() => setEditingCategory(null)}
        okText="Save"
        okButtonProps={{ loading: updatingCategory, disabled: !editedCategoryName.trim() }}
      >
        <Input
          aria-label="Category name"
          value={editedCategoryName}
          onChange={event => setEditedCategoryName(event.target.value)}
          onPressEnter={handleUpdate}
          placeholder="Enter category name"
        />
      </Modal>
      <Toaster />
    </div>
  )
}

export default ViewCategeroy