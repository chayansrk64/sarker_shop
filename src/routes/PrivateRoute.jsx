import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


     // Use useEffect to handle loading states
  useEffect(() => {
    // If user is still loading, show a progress bar
    if (loading) {
      return <progress className="progress w-56"></progress>;
    }

    // If user is not logged in, navigate to login
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }, [user, loading, location]);

  // If the user is logged in, render the children
  if (user) {
    return children;
  }

  // Default case: navigate to login
  return <Navigate to="/" state={{ from: location }} replace />;

    // if(loading){
    //     return <progress className="progress w-56"></progress>
    // }
    // if(user){
    //     return children;
    // } 

    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;