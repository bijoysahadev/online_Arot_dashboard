




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