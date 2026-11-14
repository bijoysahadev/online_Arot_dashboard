import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const CreateCategeroy = () => {
  
  const onFinish = async values =>  {
    // console.log(values);
    
  // console.log(values.Categoryname);
   let data = await axios.post("http://localhost:3000/api/v1/product/createcategory",{
    categoryname: values.Categoryname
   })
  console.log(data);
  
  if(data.data.success==="Category Created!") {
    toast.success("Category Created!")
  }
   if(data.data.error==="Already Category Exits!") {
    toast.error("Category Already Exits")
  }
  };




  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>

  <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item
          label="Category Name"
          name="Categoryname"
          rules={[{ required: true, message: 'Please input your Category name' }]}
        >
          <Input />
        </Form.Item>

     

        {/* <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    <Toaster />

    </div>
  )
}

export default CreateCategeroy