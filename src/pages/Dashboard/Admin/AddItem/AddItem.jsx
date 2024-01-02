import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_image_upload_token;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        console.log(data);


        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            // console.log(imgResponse)
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                //Note: if any input field is updated then data will be updated below;
                const {productName, brand, category, price, reviews, description } = data;
                const product = {
                    productName,
                    brand,
                    category,
                    price: parseFloat(price),
                    reviews: parseFloat(reviews),
                    description,
                    image: imgURL,
                    
                } 
                
                console.log(product)
                 
                 axiosSecure.post('/products', product)
                 .then(data => {
                    if(data.data.insertedId){
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Product Uploded Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                 })

            }
        })



      }
      console.log(watch("example")) 


    return (
        <div className='w-full'>
            <h2 className='text-center text-4xl'>Add an Item</h2>
{/* form div */}
        <div className='mx-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-x-20'>
                <div>
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Image</span>
                    </div>
                    <input type="file" {...register("image", { required: true })} placeholder="Image URL" className="file-input file-input-bordered" />
                    {errors.image && <span>Image is required</span>}
                    </label>
                </div>
                <div>
                    <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Product Name</span>
                    </div>
                    <input type="text" {...register("productName", { required: true })} placeholder="Type here" className="input input-bordered  " />
                    </label>
                </div>

                <div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Brand</span>
                        
                    </div>
                    <select defaultValue="Pick One" {...register("brand", { required: true })}  className="select select-bordered">
                        <option disabled >Pick One</option>
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
                <div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Category</span>
                        
                    </div>
                    <select defaultValue="Pick One"  {...register("category", { required: true })}  className="select select-bordered">
                        <option disabled >Pick One</option>
                        <option>mobile</option>
                        <option>watch</option>
                        <option>airpods</option>
                         
                    </select>
                     
                    </label>
                </div>
                <div>
                    <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Product Price</span>
                    </div>
                    <input type="number"  {...register("price", { required: true })}  placeholder="Type here" className="input input-bordered  " />
                    </label>
                </div>
                <div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Ratings</span>
                        
                    </div>
                    <select defaultValue="Pick One" {...register("reviews", { required: true })}  className="select select-bordered">
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
                    <textarea  {...register("description", { required: true })}  className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </label>
                </div>
                {/* testing... */}
                <div>
                    <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Product Variant</span>
                    </div>
                    <input type="text" {...register("variant", { required: true })} placeholder="Type here" className="input input-bordered  " />
                    </label>
                </div>
               
                <input className='btn btn-warning col-span-2 my-10' type="submit" value="Upload Product" />
            
            </form>
        </div>

        </div>
    );
};

export default AddItem;