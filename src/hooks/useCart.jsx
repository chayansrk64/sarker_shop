
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useCart = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
     

    const { isPending,  refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            // console.log("res from useCart", res);
            return res.json();
        }

      })

      return [ cart, refetch, isPending  ]
    
};

export default useCart;