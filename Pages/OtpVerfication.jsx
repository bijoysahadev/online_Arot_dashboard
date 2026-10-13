import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const OtpVerfication = () => {
  const params=useParams()
  console.log(params.email);
  

  let navigate=useNavigate()


  const onFinish  =  async values  => {
  console.log(values);

 let data = await axios.post("http://localhost:3000/api/v1/authentication/Otp",
  {
 
  
  email : params.email,
  otp : values.OTP,
}
,
)
console.log(data.data);

//
if 

 (data.data.success=="OTP match"){
  toast.success("Verfication Successfully !")
   navigate("/login")

}
 
 else if (data.data.error=="OTP not match"){
  toast.error("Please Enter Correct OTP")
}
 else if (data.data.error=="Invalid Cradentials"){
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
      label="OTP"
      name="OTP"
      rules={[{ required: true, message: 'Please input your OTP!' }]}
    >
      <Input />
    </Form.Item>


    {/* <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Send OPT!
      </Button>
      <Button  className='ml-2' type="primary" >
    <Link to={"/login"} >    Back</Link>
      </Button>
    </Form.Item>
  </Form>
  <Toaster/>
    </div>
  )
}

export default OtpVerfication