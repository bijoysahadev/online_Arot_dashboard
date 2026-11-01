




// 


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Regestration from "../Pages/Regestration";
import Login from "../Pages/Login";

import OtpVerfication from '../Pages/OtpVerfication'
import ForgetPassword from "../Pages/ForgetPassword";
import ChangePassword from "../Pages/ChangePassword";
import Dashboard from "../Pages/Dashboard";
import CreateProduct from "../Pages/CreateProduct";
import ViewProduct from "../Pages/ViewProduct";
import ViewVarient from "../Pages/ViewVarient";
import CreateVarient from "../Pages/CreateVarient";
import CreateCategeroy from "../Pages/CreateCategeroy";
import ViewCategeroy from "../Pages/ViewCategeroy";
import CreateDiscount from "../Pages/CreateDiscount";
import ViewDiscount from '../Pages/ViewDisocunt'
import CreateSubCaterogry from "../Pages/CreateSubCaterogry";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Regestration />}></Route>
      <Route path="/login"
        element={<Login />}></Route>
  
      <Route path="/otp/:email/:otp" element={<OtpVerfication />}
      ></Route>
      <Route path="/forgetpassword" element={<ForgetPassword />}> </Route>
      <Route path="/changepassword/:email" element={<ChangePassword />}></Route>
    
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="createproduct" element={<CreateProduct />}></Route>
            <Route path="viewproduct" element={<ViewProduct/>}></Route>
            <Route path="createVarient" element={<CreateVarient />}></Route>
            <Route path="viewVarientViewVarient" element={<ViewVarient/>}></Route>
            <Route path="createVarient" element={<CreateVarient />}></Route>
            <Route path="viewVarient" element={<ViewVarient/>}></Route>
            <Route path="createCategeroy" element={<CreateCategeroy />}></Route>
            <Route path="viewCategeroy" element={<ViewCategeroy/>}></Route>
            <Route path="createDiscount" element={<CreateDiscount/>}></Route>
            <Route path="viewDiscount" element={<ViewDiscount/>}></Route>
            <Route path="createSubCategeroy" element={<CreateSubCaterogry/>}></Route>
            <Route path="viewsubcategeroy" element={<ViewDiscount/>}></Route>

          </Route>
    </>
  )
);



// 

const App = () => {


  return (
    <div  >

      <RouterProvider router={router} />



    </div>

  )
}

export default App