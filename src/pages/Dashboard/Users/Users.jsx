
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUser } from "react-icons/fa";
import Swal from 'sweetalert2';


const Users = () => {

    const adminStyle = {
        fontWeight: 'bold',
        color: 'red',
      };
   
    
    const {data: users = [], refetch } = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        } 
        
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${user.name} is now an Admin!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user => {
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
                fetch(`http://localhost:5000/users/${user._id}`, {
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
                            <td style={user.role === 'admin' ?  adminStyle : {}}>
                                {
                                    user.role === 'admin' ? "Admin" : 
                                    <button onClick={() => handleMakeAdmin (user)} className="btn btn-ghost bg-warning text-xl"><FaUser /></button>
                                }
                                
                            </td>
                            <td>
                                <button onClick={() => handleDeleteUser (user)} className="btn btn-ghost bg-warning text-xl"><RiDeleteBin6Line /></button>
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

