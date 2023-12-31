import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    
//    const [products, setProducts] = useState([]);
//    const [loading, setLoading] = useState(true);

//    useEffect(() => {
//         fetch('http://localhost:5000/products')
//         .then(res => res.json())
//         .then(data => {
//             setProducts(data)
//             setLoading(false)
//         })
//    }, []);

//    return [products, loading]

// note: isPending === isLoading;

    const {data: products = [], isPending } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            return res.json();
        }
    })

    return [products, isPending];




   
};

export default useProducts;