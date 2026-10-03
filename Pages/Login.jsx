



// 


import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// 

  
const Login = () => {
let navigate=useNavigate()

const onFinish  =  async values  => {
  console.log(values);

 let data = await axios.post("http://localhost:3000/api/v1/authentication/login",
  {
 
  password : values.password,
  email : values.Email,
}
,
)

//
if 

 (data.data.success=="Login Succesfull"){
  toast.success("Login Successfully !")
   navigate("/home")

}
 
 else if (data.data.error=="Invalid Credentials"){
  toast.error("Invalid Credentials")
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
<p >Dont you have an account ? <Link to={`/`} >SignUP</Link> </p>
    </div>
  
  )
}
export default Login