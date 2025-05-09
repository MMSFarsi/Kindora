import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png';
import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useVolunteer from '../Hooks/useVolunteer';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isVolunteer] = useVolunteer();

  const activeClass = ({ isActive }) =>
    isActive ? 'text-green-600 font-semibold' : '';

  return (
    <div className="navbar sticky top-0 z-50 bg-white shadow-lg px-1 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={activeClass}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/event" className={activeClass}>
                EVENT
              </NavLink>
            </li>
            <li>
              <NavLink to="/donate" className={activeClass}>
                DONATE
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeClass}>
                ABOUT US
              </NavLink>
            </li>
          
            <li>
              <NavLink to="/contact" className={activeClass}>
                CONTACT
              </NavLink>
            </li>
            <li>
              {user && (
                isAdmin ? (
                  <NavLink
                    to="/dashboard/manageUser"
                    className={activeClass}
                  >
                    DASHBOARD
                  </NavLink>
                ) : isVolunteer ? (
                  <NavLink
                    to="/dashboard/available-events"
                    className={activeClass}
                  >
                    DASHBOARD
                  </NavLink>
                ) : (
                  <NavLink
                    to="/dashboard/myDonation"
                    className={activeClass}
                  >
                    DASHBOARD
                  </NavLink>
                )
              )}
            </li>
          </ul>
        </div>

        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Kindora Logo" className="h-6 lg:h-8" />
          <span className="text-sm lg:text-xl">
            <span className="text-green-600">K</span>indora
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={activeClass}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/event" className={activeClass}>
              EVENT
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className={activeClass}>
              DONATE
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeClass}>
              ABOUT US
            </NavLink>
          </li>
       
        
          <li>
            <NavLink to="/contact" className={activeClass}>
              CONTACT
            </NavLink>
          </li>
          <li>
            {user && (
              isAdmin ? (
                <NavLink
                  to="/dashboard/manageUser"
                  className={activeClass}
                >
                  DASHBOARD
                </NavLink>
              ) : isVolunteer ? (
                <NavLink
                  to="/dashboard/available-events"
                  className={activeClass}
                >
                  DASHBOARD
                </NavLink>
              ) : (
                <NavLink
                  to="/dashboard/myDonation"
                  className={activeClass}
                >
                  DASHBOARD
                </NavLink>
              )
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL}
              referrerPolicy="no-referrer"
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-gray-300"
            />
            <button
              onClick={logOut}
              className="btn px-4 py-1 text-xs bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="text-sm font-medium">
              Login
            </Link>
            <Link
              to="/register"
              className="btn lg:px-4 px-1 ml-3 py-1 text-xs bg-[#46D89F] text-[#17191a]"
            >
              Get started free
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
