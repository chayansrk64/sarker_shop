import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import Dashboard from "../layouts/Dashboard";

import Users from "../pages/Dashboard/Admin/Users/Users";
import AddItem from "../pages/Dashboard/Admin/AddItem/AddItem";
import AdminRoute from "./AdminRoute";

import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import MyCart from "../pages/Dashboard/User/MyCart/MyCart";
import ManageProduct from "../pages/Dashboard/Admin/ManageProduct/ManageProduct";
import ManageOrder from "../pages/Dashboard/Admin/ManageOrder/ManageOrder";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import AddReview from "../pages/Dashboard/User/AddReview/AddReview";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../pages/Dashboard/Admin/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/Home/Products/ProductDetails/ProductDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: '/productdetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // user routes
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'review',
                element: <AddReview></AddReview>
            },
           
           
            

            //TODO: admin routes 
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageproduct',
                element: <AdminRoute><ManageProduct></ManageProduct></AdminRoute>
            },
            {
                path: 'manageorders',
                element: <AdminRoute><ManageOrder></ManageOrder></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><Users></Users></AdminRoute>
            },
            {
                path: 'manageproduct/updateproduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            
        ]
    }
])


export default router;