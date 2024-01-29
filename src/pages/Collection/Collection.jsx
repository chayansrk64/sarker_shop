import React from 'react';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import CollectionProducts from './CollectionProducts';

const Collection = () => {

    const [products] = useProducts();
    

    console.log(products)
    return (
        <div>
            {/* banner */}
            <div className='my-16 relative'>
                <img className='opacity-80' src="https://focal-theme-carbon.myshopify.com/cdn/shop/collections/iphone-12-pro_4aeab38e-fa36-4305-853c-b1bea59df974_2000x.jpg?v=1630503883" alt="" />
                <div className='absolute w-full top-[10%] md:top-[30%] text-center px-10'>
                    <h2 className='text-3xl md:text-6xl text-warning font-bold'>COLLECTION</h2>
                    <p className='md:my-10 md:text-xl text-white'> All the best collection are here and you may explore the best ever collection here!</p>
                </div>
            </div>
            <h2 className='my-16 text-3xl'>Collection Page</h2>

            {/* all products */}
            <div className='my-20 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-32'>
                {
                    products.map(product => <CollectionProducts product={product} key={product._id}></CollectionProducts>)
                }

            </div>
            
        </div>
    );
};

export default Collection;