import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



const App = () => {

const onFinish  =  async values  => {
  console.log(values);

 let data = await axios.post("http://localhost:3000/api/v1/authentication/regestration",
  {
  userName: values.username,
  password : values.password,
  email : values.Email,
}
,{
  headers:{
    Authorization: "12345678"
  }
}
)

//
if 

 (data.data.success=="data sent Succssfully"){
  toast.success("Regestration Done!")
}
 else if (data.data=="Data exits Already"){
  toast.error("Account already exits")
}
else if (data.data=="Please Enter a Valid Email"){
  toast.error("Please Enter A Valid Email")
}

console.log(data);


  console.log( values.username);
  console.log( values.Email);
  console.log( values.password);
};



const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};







  return (
    <div  >

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
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="Email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
<Toaster />
    </div>
  
  )
}

export default App