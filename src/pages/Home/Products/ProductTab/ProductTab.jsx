import React, { useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const ProductTab = ({products}) => {
    // const [displayCount, setDisplayCount] = useState(6)

    // const handleShowAll = () => {
    //     setDisplayCount(products.length)
    // }

    return (
        <>
        <div className='my-20 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                
        
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
                
        </div>
                {/* {
                    displayCount < products.length && (<button className='btn btn-warning' onClick={handleShowAll}>
                             See Collection
                    </button>)
                }   */}
                <div className='text-center'>
                    {
                        <Link to="/collection" className='btn btn-warning'>
                                See Collection
                        </Link>
                    }  
                </div>
        </>
    );
};

export default ProductTab;