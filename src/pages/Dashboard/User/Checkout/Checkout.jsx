import React, { useContext, useRef } from 'react';
import useCart from '../../../../hooks/useCart';
import { useForm } from 'react-hook-form';
import bKash from '../../../../assets/bKash.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../providers/AuthProvider';

const Checkout = () => {

    const {user} = useContext(AuthContext);
    const [cart, refetch] = useCart();
    // console.log(cart);
    const totalPrice = [];
    cart?.map(item => {
        // console.log('chekcout items',item);
        // const [currency, money] = item.price.split('$'); // TODO: have to chage the dababase price into only number
        // const price = parseFloat(money);
        totalPrice.push(item.price);
    })
   
    const cartTotalPriceDecimal = totalPrice.reduce((total, currentValue) => total + currentValue, 0);
    const cartTotalPrice = cartTotalPriceDecimal.toFixed(2);
    const items = cart.length;

    const bKashNumberRef = useRef(null);
     

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const bKashNum = bKashNumberRef.current?.innerText;
        const updateData = {...data, bKashNum, items, cartTotalPrice, email: user.email}
        console.log(updateData);

        axios.post('http://localhost:5000/transaction', updateData)
        .then(res => {
            console.log(res)
            reset();
            if(res.data.insertedId){
                
                Swal.fire({
                    title: "Transaction Successfull!",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
               
            }
        })

      }

     
    
    return (
        <div className='h-full mt-16 w-full'>
           <div className="text-center text-4xl my-10">Checkout</div>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
            
            {/* left side */}
             <div className="md:ms-4 mx-4">
             <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20'>
                <div className='col-span-2 mb-5'>
                    <label className="form-control">
                    <div className="label ">
                        <span className="label-text text-3xl font-semibold">Contact</span>
                    </div>
                    <input type="number" {...register("contact", { required: true })} placeholder="Phone Number" className="input input-bordered" />
                    {errors.image && <span>Image is required</span>}
                    </label>
                </div>
                 

                <div className='col-span-2 mb-5'>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text text-3xl font-semibold">Delivery</span>
                        
                    </div>
                    <select defaultValue="Pick One" {...register("delivery", { required: true })}  className="select select-bordered">
                        <option disabled >Pick One</option>
                        <option>Dhaka</option>
                        <option>Kishoregonj</option>
                        <option>Mymensingh</option>
                        <option>Netrokona</option>
                        <option>Hobiganj</option>
                        <option>Kulna</option>
                        <option>Barishal</option>
                        <option>B-baria</option>
                    </select>
                     
                    </label>
                </div>

                <div className='col-span-1'>
                    <label className="form-control">
                    <div className="label ">
                        <span className="label-text ">First Name</span>
                    </div>
                    <input type="text" {...register("f_name", { required: true })} placeholder="First Name" className="input input-bordered" />
                    {errors.image && <span>First name is required</span>}
                    </label>
                </div>

                <div className='col-span-1'>
                    <label className="form-control">
                    <div className="label ">
                        <span className="label-text ">Last Name</span>
                    </div>
                    <input type="text" {...register("l_name", { required: true })} placeholder="Last Name" className="input input-bordered" />
                    {errors.image && <span>Last name is required</span>}
                    </label>
                </div>

                <div className='col-span-1'>
                    <label className="form-control">
                    <div className="label ">
                        <span className="label-text ">Address</span>
                    </div>
                    <input type="text" {...register("address", { required: true })} placeholder="Last Name" className="input input-bordered" />
                    {errors.image && <span>Last name is required</span>}
                    </label>
                </div>
                <div className='col-span-1'>
                    <label className="form-control">
                    <div className="label ">
                        <span className="label-text ">Email</span>
                    </div>
                    
                    <strong className='text-xl' >{user.email}</strong>
                    </label>
                </div>

                 

                <div className='flex items-center justify-between col-span-2 my-2 border rounded-lg '>
                    <img src={bKash} width="150px" alt="" />
                    <strong className='text-2xl' ref={bKashNumberRef} >01567890123</strong>
                </div>

                 

                <div className='col-span-1'>
                    <label className="form-control">
                    <div className="label ">
                        <span className="label-text">bKash Transaction ID</span>
                    </div>
                    <input type="text" {...register("tranId", { required: true })} placeholder="Transaction ID" className="input input-bordered" />
                    {errors.image && <span>Last name is required</span>}
                    </label>
                </div>



               
                
                 
                 
               
                <input className='btn btn-warning col-span-2 my-10' type="submit" value="Pay Now" />
            
            </form>
             </div>

            {/* right side */}
             <div className=" bg-[#F5F5F5] p-5">
  
        <div className=' w-full'>
           

            <div className="overflow-x-auto mx-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <td>
                     index
                    </td>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    cart?.map((item, index) => <tr key={item._id}>
                        <td>
                         {index + 1}
                        </td>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                        </div>
                        </td>
                        <td>
                            {item.productName}
                        </td>
                        <td className=' '>{item.price}</td>
                        
                    </tr> )
                }
                
                </tbody>
            </table>
            </div>
            <div className="divider"></div>
            <div className=' px-5 mx-10'>
                <h2 className=' font-semibold flex justify-between mb-5'>Total Orders: <span>{cart.length}</span></h2>
                <h2 className='font-semibold flex justify-between'>Total Price: <span>৳{cartTotalPrice}</span></h2>
            </div>

        </div>
    


             </div>
        </div>
        </div>
    );
};

export default Checkout;