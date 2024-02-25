import React from 'react';
import Button from '../../../components/Button/Button';

const StaticBanner = () => {
    return (
        <div className='my-[100px] h-[300px] md:h-[500px] lg:h-[700px] bg-auto bg-no-repeat bg-fixed'
            style={{backgroundImage: 'url("https://focal-theme-carbon.myshopify.com/cdn/shop/files/look2-desktop_2000x.jpg?v=1630493285")'}}>
            <div className='flex flex-col items-center justify-center h-full'>
                <h3 className='lg:text-6xl uppercase font-bold   text-white my-5'>Our Gadgets</h3>
                <Button buttonText="Explore more"></Button>
            </div>
        </div>
    );
};

export default StaticBanner;