import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import { HiLogout } from "react-icons/hi";
import { HiLogin } from "react-icons/hi";
import useAdmin from '../../../hooks/useAdmin';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
      logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User logout successfully!",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => console.log(error));
  }

  const navOptions = <>
         
        <li> <Link to="/" >Home</Link> </li>
        {/* activeClassName="active-link" */}
        <li> <Link to="/collections">Collections</Link> </li>
        <li> <Link to="/about" >About</Link> </li>
        <li><Link to="/profile"></Link>{user?.displayName}</li>

        <li> <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>Dashboard</Link> </li>

        <li>
          <Link to="/dashboard/mycart" >
            <button className="flex text-xl">
                  <FaShoppingCart />
                  <div className="badge badge-warning">+{cart?.length || 0}</div>
            </button>
          </Link>
        </li>
         
        
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
              {/* login and singup */}
              <div className="navbar-end flex gap-2">
                {
                  user ?
                  <>
                  <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                  <button title='LogOut' onClick={handleLogOut} className="p-2 text-2xl">
                  <HiLogout />
                  </button>
                  </>
                   :
                  <><Link title='LogIn' to="/login" className="p-2 text-2xl">
                   <HiLogin />
                  </Link></>
                }
                {/* <Link to="/signup" className="btn">SignUp</Link> */}
              </div>

            </div>
        </div>
    );
};

export default Header;