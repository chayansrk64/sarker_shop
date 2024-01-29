import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const ManagePayment = () => {
    const {user, loading} = useContext(AuthContext);
    const {refetch, data: payments = []} = useQuery({
        queryKey: ['payments'],
        enabled: !loading,
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/transaction')
            const data = await res.json();
            console.log(' data payment', data)
            return data;

        }
        
    })

 

    return (
        <div className='w-full my-16'>
            <h2 className='text-4xl my-10 text-center'>Manage payment</h2>

            <div className="overflow-x-auto mx-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>f_name</th>
                    <th>l_name</th>
                    <th>email</th>
                    <th>Contact</th>
                    <th>Delivery</th>
                    <th>bKash</th>
                    <th>TranId</th>
                    <th>Address</th>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row  */}
                {
                    payments.map((payment, index) =>  <tr key={payment._id}>
                        <td>
                        <label>
                            {index + 1}
                        </label>
                        </td>
                        <td>{payment.f_name}</td>
                        <td>{payment.l_name}</td>
                        <td>{payment.email}</td>
                        <td> {payment.contact}</td>
                        <td> {payment.delivery}</td>
                        <td> {payment.bKashNum}</td>
                        <td className='text-rose-600'> {payment.tranId}</td>
                        <td> {payment.address}</td>
                        <td> {payment.items}</td>
                        <td> {payment.cartTotalPrice}</td>
                        <td>
                         <button
                            className="btn btn-ghost bg-warning">
                            OK
                        </button>
                        </td>
                    </tr>)
                }
              
                
                </tbody>
                
                
                
            </table>
            </div>

             
        </div>
    );
};

export default ManagePayment;