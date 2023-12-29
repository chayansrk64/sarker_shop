import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialsLogin from '../../components/SocialsLogin/SocialsLogin';
import Swal from 'sweetalert2';

const SignUp = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    let navigate = useNavigate();

    const {
            register, handleSubmit, watch, reset, formState: { errors },
        } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const savedUser = { name: data.name, email: data.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "User Updated Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          reset();
                          navigate("/");
                    }
                })
                
            })
            .catch(error => {
                console.log(error)
            })
        })

    }

    console.log(watch("example"))


    return (
        <div className='mt-16'>
           <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col w-full">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6 text-center">Please fill in the fields below:</p>
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                {/* form start */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered" required />
                    {errors.name && <span className="text-red-600">Name field is required</span>}
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="Your Email" className="input input-bordered" required />
                    {errors.email && <span className="text-red-600">Email field is required</span>}
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", { 
                                    required: true,
                                    minLength:6,
                                    maxLength: 20, 
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}/
                                })} 
                     type="password" placeholder="password" className="input input-bordered" required />
                     {errors.password && <span className="text-red-600">Password at least 6 and not more than 20 characters</span>}
                     {errors.password && <span className="text-red-600">Password should uppercase, lowercase and special characters</span>}
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input {...register("confirm", { required: true, 
                                    validate: (value) =>
                                    value === watch('password') || 'Passwords do not match',
                                    })} 
                    type="password" placeholder="Confirm Password" className="input input-bordered" required />
                    {errors.confirm && <p className="text-red-600">{errors.confirm.message}</p>}
                    </div>

                    <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign UP" />
                    </div>

                </form>
                 {/* form end */}
                 <p className='px-3'><small>Already have Account? <Link to='/login' className='text-warning'>Login</Link> </small></p>
                 {/* Social login will be render here soon */}
                 <SocialsLogin></SocialsLogin>
                </div>

            </div>
            </div>
        </div>
    );
};

export default SignUp;