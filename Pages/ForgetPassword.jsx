import React from 'react'

// 

import  { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// 
const ForgetPassword = () => {
    let navigate=useNavigate()

const onFinish  =  async values  => {
  console.log(values);

 let data = await axios.post("http://localhost:3000/api/v1/authentication/forgetpassword ",
  {
 
findemail:values.findemail,
}
,
)
console.log(data.data);
//
if 

 (data.data.success=="Found Your Email"){
  toast.success("Your EMail found Successfully !")
   navigate(`/changepassword/${data.data.email}`)

}
 
 else if (data.data.error=="YOur Account not found!"){
  toast.error("Your Email is not found")
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
      label="Find Your Account Email"
      name="findemail"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>

    {/* <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
     Continue
      </Button>
    </Form.Item>
  </Form>
<p  className='ml-40' ><Link to={`/login`} > Back to login</Link> </p>
<Toaster/>
    </div>
  )
}

export default ForgetPassword