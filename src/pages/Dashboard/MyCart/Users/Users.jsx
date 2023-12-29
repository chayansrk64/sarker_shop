
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Users = () => {
    
    const {data: users = [], refetch } = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        } 
        
    })
 
    
    return (
        <div className='w-full'>
            <div className='text-center my-10 text-3xl'>All Users: {users.length}</div>
            <div className="overflow-x-auto mx-10">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <td>index</td>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {/* row  */}
                    {
                        users.map((user, index) =>  <tr key={user._id}>
                            <th>
                             { index + 1 }
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                     <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                 
                            </div>
                            </td>
                            <td>
                               {user.name}
                            </td>
                            <td>{user.email}</td>
                            <td>Admin/User</td>
                            <td>
                            <button className="btn btn-ghost btn-xs">delete</button>
                            </td>
                        </tr>)
                    }
                   
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    );
};

export default Users;

