import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {

        console.log(data);

            fetch('http://localhost:5000/products', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    alert('product inserted')
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
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered " />
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
                    <select  {...register("brand", { required: true })}  className="select select-bordered">
                        <option disabled selected>Pick one</option>
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
                    <select  {...register("category", { required: true })}  className="select select-bordered">
                        <option disabled selected>Pick one</option>
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
                    <select  {...register("reviews", { required: true })}  className="select select-bordered">
                        <option disabled selected>Pick one</option>
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
               
                <input className='btn btn-warning col-span-2 my-10' type="submit" value="Upload Product" />
            
            </form>
        </div>

        </div>
    );
};

export default AddItem;