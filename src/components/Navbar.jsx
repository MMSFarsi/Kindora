import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="navbar sticky top-0 z-50 bg-white shadow-lg px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT US</NavLink></li>
            <li><NavLink to="/event">EVENT</NavLink></li>
            <li><NavLink to="/donate">DONATE</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
          </ul>
        </div>

        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Kindora Logo" className="h-8" />
          <span className="text-xl"><span className="text-green-600">K</span>indora</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT US</NavLink></li>
          <li><NavLink to="/event">EVENT</NavLink></li>
          <li><NavLink to="/donate">DONATE</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <img src={user.photoURL} referrerPolicy='no-referrer' alt="Profile" className="h-10 w-10 rounded-full border-2 border-gray-300" />
            <button 
              onClick={logOut} 
              className="btn px-4 py-1 text-xs bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link 
              to="/register" 
              className="btn px-4 ml-3 py-1 text-xs bg-[#46D89F] text-[#17191a]"
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
