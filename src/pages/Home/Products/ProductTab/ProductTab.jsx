import React, { useState } from 'react';
import Product from '../Product/Product';

const ProductTab = ({products}) => {
    const [displayCount, setDisplayCount] = useState(3)

    const handleShowAll = () => {
        setDisplayCount(products.length)
    }

    return (
        <>
        <div className='my-20 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                
        
                {
                    products.slice(0, displayCount).map(product => <Product key={product._id} product={product}></Product>)
                }
                
        </div>
                {
                    displayCount < products.length && (<button className='btn btn-warning' onClick={handleShowAll}>
                             Show All
                    </button>)
                }
        </>
    );
};

export default ProductTab;