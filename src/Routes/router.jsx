

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About Us/AboutUs";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ScrollTop from "../components/ScrollTop";
import AddEvent from "../pages/AddEvent/AddEvent";
import AllEvents from "../pages/event/AllEvents";
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <ScrollTop></ScrollTop>
          <MainLayout/>
        </>
      ),
      // errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'addEvent',
          element:<AddEvent></AddEvent>
        },
        {
          path:'event',
          element:<AllEvents></AllEvents>
        }
       
      ]
    },
  ])