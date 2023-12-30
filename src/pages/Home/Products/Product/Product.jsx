
import { useContext } from 'react';
import Button from '../../../../components/Button/Button';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';

const Product = ({product}) => {

    const {id, productName, brand, price, image} = product;
    // console.log(mobile);
    
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = (product) => {
        // console.log(product);
       
        if(user && user.email){
            const cartItem = {productId: id, image, productName, brand, price, email: user.email };
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // to update the cart product count;
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Product Added to Cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "Please login to Purchase Product",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Login"
              }).then((result) => {
                if (result.isConfirmed){
                    navigate('/login', {state: {from:location}});
                }  
              });
        }
    }

    return (
        <div className=" bg-[#edecec]">
        <figure>
             <a href="/product-details">
                 <img src={image} alt="Image" />
             </a>
         </figure>

         
         <div className="card-body">
             <h2 className="card-title">
             {productName}
             <div className="badge badge-secondary">NEW</div>
             </h2>
             <p>{brand}</p>
             <div className="card-actions justify-end">
             <div className="">
                 <span>Price:</span> <del>{price}</del>
             </div> 
             <div className="">
                 <p>{price}</p>
             </div>
             </div>
             <div className='flex justify-between'>
                 <Button onClick={() => handleAddToCart(product)} buttonText="Add To Cart"></Button>
                  <button>See More</button>
             </div>
         </div>
         </div>
    );
};

export default Product;