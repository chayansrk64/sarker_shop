import React from 'react';
import Product from '../Product/Product';

const ProductTab = ({products}) => {
    return (
        <div className='my-20 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => 
                        <Product key={product.id} product={product}></Product>
                    )
                }   
            </div>
    );
};

export default ProductTab;