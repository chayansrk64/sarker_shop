import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import { AuthContext } from '../../../../providers/AuthProvider';
import useCart from '../../../../hooks/useCart';
import Swal from 'sweetalert2';
import Reviews from '../../Reviews/Reviews';

const ProductDetails = () => {
    const product = useLoaderData();
    const {id, productName, brand, price, image } = product;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    console.log(product)
    
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
    }



    return (
        <div className='md:my-16'>
            {/* container  */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* left div image only */}
            <div>
                <img src={product.image} alt="" />
            </div>
            {/* right div contents */}
            <div>
                <div>
                    <h2 className='text-4xl my-10'>{product.productName}</h2>
                    <p>Price: {product.price}</p>
                    <p>Brand: {product.brand}</p>
                    <p className='my-5'>{product.description}</p>
                    <div className='divider'></div>
                    <div>
                    <Button onClick={() => handleAddToCart(product)} buttonText="Add To Cart"></Button>
                    </div>
                </div>
            </div>
        </div>

        <Reviews></Reviews>

        </div>
    );
};

export default ProductDetails;