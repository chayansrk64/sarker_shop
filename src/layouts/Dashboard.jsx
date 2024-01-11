import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import useCart from '../hooks/useCart';
import { TfiWrite } from "react-icons/tfi";
import { FaMobileAlt } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    // const {user} = useContext(AuthContext);

    const [cart] = useCart();

    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-warning my-20 w-full drawer-button lg:hidden">Drawer</label>
            <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side mt-40 lg:mt-16 md:bg-warning">
            {/* <div className='text-center my-5'>
                <img src={user?.photoURL} className='rounded-full inline' alt="" />
                <h3 className='text-3xl font-semibold'>{user?.displayName}</h3>
            </div> */}

            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-warning min-h-full">
             
            {/* Sidebar content here */}

            {
                isAdmin ?
                
                <>

                <li><NavLink to="/dashboard/adminhome"><IoHome />Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/additem"><FaMobileAlt />Add Product</NavLink></li>
                <li><NavLink to="/dashboard/manageproduct"><TfiWrite />Manage Products</NavLink></li>
                <li><NavLink to="/dashboard/manageorders"><FaWallet />Manage Orders</NavLink></li>
                <li><NavLink to="/dashboard/users"><FaAddressBook />Users</NavLink></li>

                </> 
                :
                <>

                <li><NavLink to="/dashboard/userhome"><IoHome />User Home</NavLink></li>
                <li><NavLink to="/dashboard/payment"><FaMoneyCheckDollar />Payment History</NavLink></li>
                <li>
                    <NavLink to="/dashboard/mycart">
                        <FaShoppingCart />
                        My Cart
                    <span className="badge badge-warning text-gray font-semibold">{cart?.length || 0}</span>
                    </NavLink></li>
                <li><NavLink to="/dashboard/review"><FaAddressBook />Add Review</NavLink></li>

                </>
            }

            <div className="divider"></div>
            
            {/* <li><NavLink to="/"><IoHome />Home</NavLink></li> */}
            <li><NavLink to="/dashboard/contact"><IoMdMail />Contact</NavLink></li>

            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;