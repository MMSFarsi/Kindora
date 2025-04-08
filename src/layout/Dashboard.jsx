import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useVolunteer from "../Hooks/useVolunteer";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isVolunteer] = useVolunteer();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row">
    
      <div className="lg:hidden bg-gray-900 text-gray-100 shadow-lg">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <button
            className="text-white p-2 rounded-md hover:bg-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="bg-gray-800 text-gray-100">
            <ul className="space-y-2 p-4">
              {isAdmin && (
                <>
                  <li><NavLink to="/dashboard/manageUser" className={navClass}>Manage Users</NavLink></li>
                  <li><NavLink to="/dashboard/manageEvent" className={navClass}>Event Management</NavLink></li>
                  <li><NavLink to="/dashboard/report" className={navClass}>Reports & Analytics</NavLink></li>
                </>
              )}
              {!isAdmin && !isVolunteer && (
                <>
                  <li><NavLink to="/dashboard/myDonation" className={navClass}>My Donations</NavLink></li>
                  <li><NavLink to="/dashboard/transactionHistory" className={navClass}>Transaction History</NavLink></li>
                </>
              )}
              {isVolunteer && (
                <>
                  <li><NavLink to="/dashboard/available-events" className={navClass}>Available Events</NavLink></li>
                  <li><NavLink to="/dashboard/addEvent" className={navClass}>Add Event</NavLink></li>

                  <li><NavLink to="/dashboard/my-assigned-events" className={navClass}>My Assigned Events</NavLink></li>
                  {/* <li><NavLink to="/dashboard/progress-reports" className={navClass}>Progress Reports</NavLink></li> */}
                </>
              )}
              <hr className="my-4 border-gray-700" />
              <li><NavLink to="/" className={navClass}>Home</NavLink></li>
            </ul>
          </div>
        )}
      </div>

    
      <div className="hidden lg:block w-56 min-h-screen bg-gray-800 text-gray-100 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mt-5 mb-6 text-center">Dashboard</h2>
          <ul className="space-y-4">
            {isAdmin && (
              <>
                <li><NavLink to="/dashboard/manageUser" className={navClass}>Manage Users</NavLink></li>
                <li><NavLink to="/dashboard/manageEvent" className={navClass}>Event Management</NavLink></li>
                <li><NavLink to="/dashboard/report" className={navClass}>Reports & Analytics</NavLink></li>
              </>
            )}
            {!isAdmin && !isVolunteer && (
              <>
                <li><NavLink to="/dashboard/myDonation" className={navClass}>My Donations</NavLink></li>
                <li><NavLink to="/dashboard/transactionHistory" className={navClass}>Transaction History</NavLink></li>
              </>
            )}
            {isVolunteer && (
              <>
                <li><NavLink to="/dashboard/available-events" className={navClass}>Available Events</NavLink></li>
                <li><NavLink to="/dashboard/addEvent" className={navClass}>Add Event</NavLink></li>
                <li><NavLink to="/dashboard/my-assigned-events" className={navClass}>My Assigned Events</NavLink></li>
                {/* <li><NavLink to="/dashboard/progress-reports" className={navClass}>Progress Reports</NavLink></li> */}
              </>
            )}
            <hr className="my-4 border-gray-700" />
            <li><NavLink to="/" className={navClass}>Home</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="flex-1 bg-[#FCF8F8]">
        <Outlet />
      </div>
    </div>
  );
};

const navClass = ({ isActive }) =>
  `block px-4 py-2 rounded-md ${
    isActive ? "bg-green-500 text-white" : "hover:bg-green-700"
  }`;

export default Dashboard;
