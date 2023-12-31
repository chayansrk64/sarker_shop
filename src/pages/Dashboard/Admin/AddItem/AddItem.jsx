import React from 'react';

const AddItem = () => {
    return (
        <div className='w-full'>
            <h2 className='text-center text-4xl'>Add an Item</h2>
{/* form div */}
        <div className='mx-10'>
            <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-x-20'>
                <div>
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Image</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered " />
                    </label>
                </div>
                <div>
                    <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Product Name</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered  " />
                    </label>
                </div>

                <div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Brand</span>
                        
                    </div>
                    <select className="select select-bordered">
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
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Mobile</option>
                        <option>Watch</option>
                        <option>Airpods</option>
                         
                    </select>
                     
                    </label>
                </div>
                <div>
                    <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Product Price</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered  " />
                    </label>
                </div>
                <div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Ratings</span>
                        
                    </div>
                    <select className="select select-bordered">
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
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>
                </div>
               
                <input className='btn btn-warning col-span-2 my-10' type="submit" value="Upload Product" />
            
            </form>
        </div>

        </div>
    );
};

export default AddItem;