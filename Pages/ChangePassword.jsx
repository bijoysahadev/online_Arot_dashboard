import React from 'react'

import  { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
const ChangePassword = () => {
    const params=useParams()
    // console.log(params.email);
    
 let navigate=useNavigate()

const onFinish  =  async values  => {
  console.log(values);

 let data = await axios.post("http://localhost:3000/api/v1/authentication/changepassword",
  {
 
  newpassword : values.newpassword,
  email :params.email,
 
}
,
)

//
// if 

//  (data.data.success=="Login Succesfull"){
//   toast.success("Login Successfully !")
//    navigate("/home")

// }
 
//  else if (data.data.error=="Invalid Credentials"){
//   toast.error("Invalid Credentials")
// }
//  else if (data.data.error=='Please Verify Your Email First'){
//   toast.error("Please Verift Your Email First")
// }

console.log(data.data);


  console.log( values.username);
  console.log( values.Email);
  console.log( values.password);
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
              label="NEW PASSWORD"
              name="newpassword"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
        
          
        
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
             Reset Password
              </Button>
            </Form.Item>
          </Form>
          <p  className='ml-40' ><Link to={`/login`} > Back to login</Link> </p>
    </div>
  )
}

export default ChangePassword