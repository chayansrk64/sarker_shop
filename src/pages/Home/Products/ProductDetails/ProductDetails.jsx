import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import { AuthContext } from '../../../../providers/AuthProvider';
import useCart from '../../../../hooks/useCart';
import Swal from 'sweetalert2';
import Reviews from '../../Reviews/Reviews';
import { FaStar } from "react-icons/fa";
// swiper slider
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
const ProductDetails = () => {

   

    const product = useLoaderData();
    const {id, productName, brand, price, image } = product;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    console.log(product);


    
    const handleAddToCart = () => {
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
    }
    
    const [counter, setCounter] = useState(1)
    
    const increase = () => {
        return setCounter(counter + 1) 
    }

    const decrease = () => {
        if(counter > 1) {
            return setCounter(counter -1)
        }
    }

    return (
        <div className='my-16'>
            {/* container  */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>


            {/* left div image only */}
            <div className='mt-12 px-5 md:px-0'>
           
            
            <Carousel 
               
                thumbWidth={100}
                thumbHeight={75}>
                <div  className='md:h-[650px] md:w-[700px] border-2 '>
                    <img className='h-full border-2 ' src={product.image} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                 
                <div  className='md:h-[650px] md:w-[700px] border-2 '>
                    <img className='h-full border-2 ' src={product.image} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                 
                <div  className='md:h-[650px] md:w-[700px] border-2 '>
                    <img className='h-full border-2 ' src={product.image} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                 
                
            </Carousel>
          

            </div>


            {/* right div contents */}
            <div className='px-5 md:px-0'>
                <div>
                    <h2 className='text-3xl md:text-5xl my-10 font-semibold'>{product.productName}</h2>
                    <p className='text-yellow-500 font-semibold text-2xl'> {product.price}</p>
                    <p className='ont-semibold text-2xl my-5'>{product.brand}</p>
                    <div className='flex items-center gap-1 my-5'>
                        <span className='text-yellow-500 '><FaStar /></span>
                        <span className='text-yellow-500 '><FaStar /></span>
                        <span className='text-yellow-500 '><FaStar /></span>
                        <span className='text-yellow-500 '><FaStar /></span>
                        <span className='text-yellow-500 '><FaStar /></span>
                        <span className='text-yellow-500 ms-5 '>reviews</span>
                    </div>

                    <div className='divider'></div>

                     {/* color */}
                     <div>
                     <p className='mb-1'>Color</p>
                     <div className='flex gap-3'>
                        <div className='w-[100px] border-2'><img src={product.image} alt=""></img></div>
                        <div className='w-[100px] border-2'><img src={product.image} alt=""></img></div>
                        <div className='w-[100px] border-2'><img src={product.image} alt=""></img></div>
                    </div>
                    </div>

                    {/* quantity */}
                     <div className='my-5'>
                        <p className='mb-1'>Quantity</p>
                        <div className='flex items-center justify-between w-[170px] py-3 border'>
                            <div className='text-2xl cursor-pointer w-full text-center'>
                                <input onClick={decrease} type="button" value="-" />
                            </div>
                            <div className='w-[40px]'>
                                <input className='w-full text-center' type="text" value={counter} />
                            </div>
                            <div className='text-2xl cursor-pointer w-full text-center'>
                                <input onClick={increase} type="button" value="+" />
                            </div>
                        </div>
                     </div>

                   
                    {/* <p className='my-5'>{product.description}</p> */}
                    <div>
                    <Button onClick={() => handleAddToCart(product)} buttonText="Add To Cart"></Button>
                    </div>
                </div>
            </div>
        </div>
        {/* Reviews */}
        <Reviews></Reviews>

        </div>
    );
};

export default ProductDetails;
 