import React from 'react';
import useCart from '../../../hooks/useCart';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCart();
    // console.log(cart);
    const totalPrice = [];
    cart?.map(item => {
        const [currency, money] = item.price.split('$'); // TODO: have to chage the dababase price into only number
        const price = parseFloat(money);
        totalPrice.push(price);
    })
   
    const cartTotalPrice = totalPrice.reduce((total, currentValue) => total + currentValue, 0);
    
    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }


    return (
        <div className=' w-full'>
            <div className='flex justify-between items-center h-[100px] px-5 bg-purple-200 mx-10'>
                <h2 className='text-2xl font-semibold'>Total Orders: {cart.length}</h2>
                <h2 className='text-2xl font-semibold'>Total Price: {cartTotalPrice}</h2>
                <button className='btn btn-warning font-semibold'>PAY</button>
            </div>

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
                    <th>action</th>
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
                        <td className=' '>${item.price}</td>
                        <td>
                            <button onClick={() => handleDeleteItem (item)} className="btn btn-ghost bg-warning text-xl"><RiDeleteBin6Line /></button>
                        </td>
                    </tr> )
                }
                
                </tbody>
            </table>
            </div>

        </div>
    );
};

export default MyCart;