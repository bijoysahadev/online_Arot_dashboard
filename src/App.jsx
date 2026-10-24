




// 


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Regestration from "../Pages/Regestration";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import OtpVerfication from '../Pages/OtpVerfication'
import ForgetPassword from "../Pages/ForgetPassword";
import ChangePassword from "../Pages/ChangePassword";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Regestration />}


      >

      </Route>
      <Route
        path="/login"
        element={<Login />}


      >
      </Route>
      <Route
        path="/home"
        element={<Home />}


      >

      </Route>
      <Route
        path="/otp/:email/:otp"
        element={<OtpVerfication />}


      >

      </Route>
      <Route
        path="/forgetpassword"
        element={<ForgetPassword/>}


      >

      </Route>
      <Route
        path="/changepassword/:email"
        element={<ChangePassword/>}


      >

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