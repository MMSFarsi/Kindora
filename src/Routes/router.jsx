

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/About Us/AboutUs";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ScrollTop from "../components/ScrollTop";
import AddEvent from "../pages/AddEvent/AddEvent";
import AllEvents from "../pages/event/AllEvents";
import Donate from "../pages/Donate/Donate";
import ContactUs from "../pages/ContactUs/ContactUs";
import EventDetails from "../components/EventDetails";
import Dashboard from "../layout/Dashboard";
import MyDonation from "../pages/NormalUser/MyDonation";
import History from "../pages/NormalUser/History";
import Payment from "../pages/Payment/Payment";
import ManageUser from "../pages/Admin/ManageUser";
import ManageEvent from "../pages/Admin/ManageEvent";
import Report from "../pages/Admin/Report";
import AvailableEvents from "../pages/Volunteer/AvailableEvents";
import ProgressReports from "../pages/Volunteer/ProgressReports";
import AssignedEvents from "../pages/Volunteer/AssignedEvents";
import { lazy } from "react";
import PrivateRoute from "./PrivateRoute.jsx/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import ErrorPage from "../components/ErrorPage";
import VolunteerRoute from "./VolunteerRoute/VolunteerRoute";
import EditEvent from "../pages/Volunteer/EditEvent";
const Home = lazy(() => import('../pages/Home/Home'));
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <ScrollTop></ScrollTop>
          <MainLayout/>
        </>
      ),
      errorElement:<ErrorPage></ErrorPage>,
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
          path:'event',
          element:<AllEvents></AllEvents>
        },
        {
          path:'donate',
          element:<PrivateRoute><Donate></Donate></PrivateRoute>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>
        },
        {
          path: '/event-details/:id',
          element:<EventDetails></EventDetails>
        },
        {
          path: "payment/:id",
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
       
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'addEvent',
          element:<VolunteerRoute><AddEvent></AddEvent></VolunteerRoute>
        },
        {
          path:'manageUser',
          element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path:'manageEvent',
          element:<AdminRoute><ManageEvent></ManageEvent></AdminRoute>
        },
        {
          path:'report',
          element:<AdminRoute><Report></Report></AdminRoute>
        },
        {
          path:'myDonation',
          element:<PrivateRoute><MyDonation></MyDonation></PrivateRoute>
        },
        {
          path:'transactionHistory',
          element:<PrivateRoute><History></History></PrivateRoute>
        },
        {
          path:'available-events',
          element:<VolunteerRoute><AvailableEvents></AvailableEvents></VolunteerRoute>
        },
        {
          path:'my-assigned-events',
          element:<VolunteerRoute><AssignedEvents></AssignedEvents></VolunteerRoute>
        },
        {
          path:'edit-event/:id',
          element:<AdminRoute><EditEvent></EditEvent></AdminRoute>,
          loader:({params})=>fetch(`https://kindora-server.vercel.app/event-details/${params.id}`)

        },
        {
          path:'progress-reports',
          element:<ProgressReports></ProgressReports>
        },
      ]
    }
  ])