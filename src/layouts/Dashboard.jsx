import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaUtensils, FaWallet } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import useCart from '../hooks/useCart';
import { TfiWrite } from "react-icons/tfi";

const Dashboard = () => {

    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-warning my-10 w-full drawer-button lg:hidden">Open drawer</label>
            <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side  mt-28 lg:mt-0">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-warning">
            {/* Sidebar content here */}

            {
                isAdmin ?
                
                <>

                <li><NavLink to="/dashboard/adminhome"><IoHome />Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/additems"><FaUtensils />Add Items</NavLink></li>
                <li><NavLink to="/dashboard/manageproducts"><TfiWrite />Manage Products</NavLink></li>
                <li><NavLink to="/dashboard/manageorders"><FaWallet />Manage Orders</NavLink></li>
                <li><NavLink to="/dashboard/users"><FaAddressBook />Users</NavLink></li>

                </> 
                :
                <>

                <li><NavLink to="/dashboard/userhome"><IoHome />User Home</NavLink></li>
                <li><NavLink to="/dashboard/payment"><FaMoneyCheckDollar />Payment History</NavLink></li>
                <li>
                    <NavLink to="/dashboard/mycart">
                        My Cart
                        <FaShoppingCart />
                    <span className="badge badge-warning text-gray font-semibold">+{cart?.length || 0}</span>
                    </NavLink></li>
                <li><NavLink to="/dashboard/review"><FaAddressBook />Add Review</NavLink></li>

                </>
            }

            <div className="divider"></div>
            
            <li><NavLink to="/"><IoHome />Home</NavLink></li>
            <li><NavLink to="/dashboard/contact"><IoMdMail />Contact</NavLink></li>

            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;