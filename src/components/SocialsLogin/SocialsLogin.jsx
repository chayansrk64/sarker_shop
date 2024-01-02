import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialsLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser)
            const savedUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL }

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                .then(res => res.json())
                .then(() => {
                  navigate(from, {replace: true});
                })
        })
    }

    return (
        <div>
        <div className="divider"></div>
        <div className='text-center mb-5'>
          <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
            <FaGoogle></FaGoogle>
          </button>
        </div>
      </div>
    );
};

export default SocialsLogin;