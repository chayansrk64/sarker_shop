import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const navOptions = <>
         
        <li> <Link to="/" activeClassName="active-link">Home</Link> </li>
        <li> <Link to="/collections" activeClassName="active-link">Collections</Link> </li>
        <li> <Link to="/about" activeClassName="active-link">About Us</Link> </li>
</>



    return (
        <div className='relative'>
            <div className="navbar bg-[#282828] text-white fixed top-0 left-0 right-0 z-10 max-w-screen-2xl mx-auto shadow-md ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navOptions}
                  </ul>
                </div>   
                <a className="btn btn-ghost text-xl">Sarker Shop</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navOptions}
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn">Login</a>
              </div>
            </div>
        </div>
    );
};

export default Header;