import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
 
 

const UpdateProduct = () => {

    const product = useLoaderData();
    
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        console.log(data)

        // console.log(data);

 

        fetch(`http://localhost:5000/products/${product._id}`, {
            method:"PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(update => {
            if(update.modifiedCount > 0){

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Product has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })


      }


    return (
        <div className='w-full'>
        <h2 className='text-center text-4xl'>Update an Item</h2>
{/* form div */}
    <div className='mx-10 '>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20'>
            {/* <div className='col-span-2 md:col-span-1'>
                <label className="form-control">
                <div className="label ">
                    <span className="label-text">Product Image</span>
                </div>
                <input type="file"  {...register("image", { required: true })} placeholder="Image URL" className="file-input file-input-bordered" />
                {errors.image && <span>Image is required</span>}
                </label>
            </div> */}
            <div className='col-span-2 md:col-span-1'>
                <label className="form-control">
                <div className="label">
                    <span className="label-text">Product Name</span>
                </div>
                <input type="text" defaultValue={product.productName} {...register("productName", { required: true })} placeholder="Type here" className="input input-bordered  " />
                </label>
            </div>

            <div className='col-span-2 md:col-span-1'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Product Brand</span>
                    
                </div>
                <select defaultValue={product.brand} {...register("brand", { required: true })}  className="select select-bordered">
                     
                    <option>Samgsung</option>
                    <option>Oppo</option>
                    <option>Vivo</option>
                    <option>Xiami</option>
                    <option>Infinix</option>
                    <option>Nokia</option>
                    <option>Redmi</option>
                    <option>Symphony</option>
                </select>
                 
                </label>
            </div>
            <div className='col-span-2 md:col-span-1'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Product Category</span>
                    
                </div>
                <select defaultValue={product.category}  {...register("category", { required: true })}  className="select select-bordered">
                    
                    <option>mobile</option>
                    <option>watch</option>
                    <option>airpods</option>
                     
                </select>
                 
                </label>
            </div>
            <div className='col-span-2 md:col-span-1'>
                <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Product Price</span>
                </div>
                <input type="number" defaultValue={product.price} {...register("price", { required: true })}  placeholder="Type here" className="input input-bordered  " />
                </label>
            </div>
            <div className='col-span-2 md:col-span-1'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Product Ratings</span>
                    
                </div>
                <select defaultValue={product.reviews} {...register("reviews", { required: true })}  className="select select-bordered">
                     
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
                <textarea defaultValue={product.description} {...register("description", { required: true })}  className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                </label>
            </div>
             
           
            <input className='btn btn-warning col-span-2 my-10' type="submit" value="Update Product" />
        
        </form>
    </div>

    </div>
    );
};

export default UpdateProduct;