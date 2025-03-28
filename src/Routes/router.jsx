

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About Us/AboutUs";
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
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
        }
       
      ]
    },
  ])