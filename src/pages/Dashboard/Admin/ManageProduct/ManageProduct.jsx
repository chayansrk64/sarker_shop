import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    

    const [products, , refetch] = useProducts();
    const [axiosSecure] = useAxiosSecure()

    const handleDeleteProduct = product => {
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
                axiosSecure.delete(`/products/${product._id}`)
                .then(res => {
                    // console.log(res.data)
                    if(res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your Product has been deleted.",
                        icon: "success"
                    });
                    }
                })
            
            }
          });
    }

     

    return (
        <div className='w-full'>
            <h2 className="text-4xl text-center my-10">Manage Product</h2>

         <div className="overflow-x-auto mx-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row  */}
                {
                    products.map((product, index) =>   <tr key={product._id}>
                        <td>
                        <label>
                            {index + 1}
                        </label>
                        </td>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                        </div>
                        </td>
                        <td> {product.productName} </td>
                        <td>
                            <Link to={`updateproduct/${product._id}`}>
                                <button 
                                className="btn btn-ghost bg-warning text-xl"

                                ><AiFillEdit />
                                </button>
                                 
                            </Link>
                        </td>
                        <td>
                         <button onClick={() => handleDeleteProduct (product)} className="btn btn-ghost bg-warning text-xl"><RiDeleteBin6Line /></button>
                        </td>
                    </tr>)
                }
              
                
                </tbody>
                
                
                
            </table>
            </div>
        </div>
    );
};

export default ManageProduct;