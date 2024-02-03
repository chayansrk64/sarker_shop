import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    

    const {data: products = [], isPending, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            // console.log(res)
            return res.json();
        }
    })

    return [products, isPending, refetch];




   
};

export default useProducts;