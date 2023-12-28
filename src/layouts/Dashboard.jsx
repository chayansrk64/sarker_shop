import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-warning">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full">
            {/* Sidebar content here */}
            <li><NavLink to="/dashboard/userhome"><IoHome />User Home</NavLink></li>
            <li><NavLink to="/dashboard/payment"><FaMoneyCheckDollar />Payment History</NavLink></li>
            <li><NavLink to="/dashboard/mycart"><FaShoppingCart />My Cart</NavLink></li>
            <li><NavLink to="/dashboard/review"><FaAddressBook />Add Review</NavLink></li>

            <div className="divider"></div>
            
            <li><NavLink to="/"><IoHome />Home</NavLink></li>
            <li><NavLink to="/dashboard/contact"><IoMdMail />Contact</NavLink></li>

            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;