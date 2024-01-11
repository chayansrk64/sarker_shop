import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddReview = () => {
     
    const {user} = useContext(AuthContext);
    
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
          const ratingInteger = parseInt(data.rating);
          data.rating = ratingInteger
          console.log(data);

          axios.post('http://localhost:5000/reviews', data)
          .then(res => {
            console.log(res)
            if(res.data.insertedId){
                
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Review added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
               
            }
          })

         

      }


    return (
        <div className='w-full'>
            <h2 className="text-4xl text-center my-10">Add Review</h2>
            <div className='mx-10 '>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20'>
                 
                <div className='col-span-2 md:col-span-1'>
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">Client Name</span>
                    </div>
                    <input type="text" defaultValue={user?.displayName} {...register("client_name", { required: true })} placeholder="Type here" className="input input-bordered  " />
                    </label>
                </div>
                
                 

                
                
                <div className='col-span-2 md:col-span-1'>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Ratings</span>
                        
                    </div>
                    <select {...register("rating", { required: true })}  className="select select-bordered">
                        <option disabled >Pick One</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                         
                    </select>
                     
                    </label>
                </div>
                <div className='col-span-2'>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Description</span>
                    </div>
                    <textarea  {...register("review", { required: true })}  className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </label>
                </div>
                 
               
                <input className='btn btn-warning col-span-2 my-10' type="submit" value="Add Review" />
            
            </form>
        </div>
        </div>
    );
};

export default AddReview;