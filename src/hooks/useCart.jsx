
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    const {user, loading} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()
     

    const { isPending,  refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     // console.log("res from useCart", res);
        //     return res.json();
        // }
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log("res from axios useCart ", res);
            return res.data;
        }

      })

      return [ cart, refetch, isPending  ]
    
};

export default useCart;