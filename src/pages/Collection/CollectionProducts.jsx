import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../providers/AuthProvider';

const CollectionProducts = ({product}) => {


    const {id, productName, brand, price, image } = product;
    // console.log(product);
    
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
        <div>
            
            {/* all products */}
            <div>
            <>
                     <div className=" bg-[#edecec] ">

                        <div className='h-[400px]'>
                            <figure className='h-full'>
                                <Link to={`/productdetails/${product._id}`} href="/product-details">
                                    <img className='h-full w-full' src={product.image} alt="Image" />
                                </Link>
                            </figure>
                        </div>




                        <div className="card-body">
                        <h2 className="card-title">
                        {product.productName}

                        </h2>
                        <p>{product.brand}</p>
                        <div className="card-actions justify-end">
                        <div className="">
                            <span>Price:</span> <del>{product.price}</del>
                        </div> 
                        <div className="">
                            <p>{product.price}</p>
                        </div>
                        </div>
                        <div className='flex justify-between'>
                            <Button onClick={() => handleAddToCart(product)} buttonText="Add To Cart"></Button>
                            <Link to={`/productdetails/${product._id}`}>
                                <button className='font-bold flex items-center gap-1 mt-4'>
                                    <span>See More</span>  <IoMdArrowRoundForward></IoMdArrowRoundForward>
                                </button>
                            </Link>
                        </div>
                        </div>
                        </div>
                    </>
            </div>
        </div>
    );
};

export default CollectionProducts;