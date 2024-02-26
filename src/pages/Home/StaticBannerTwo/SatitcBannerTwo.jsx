import React from 'react';
import Button from '../../../components/Button/Button';

const SatitcBannerTwo = () => {
    return (
        <div className='w-full flex flex-col md:relative'>
            <div className=' lg:w-[520px] lg:h-[420px] bg-[#405de6] text-white px-10 py-16 md:right-[170px] md:top-[151px] md:absolute '>
                <h3 className='text-4xl font-semibold'>GOOD DESIGN & QUALITY</h3>
                <p className='py-5'>Born out of a shared love of good design & quality products, we create considered solutions fit for the modern lifestyle. Always driven by passion, we work to empower others to live the same way.</p>
                <Button buttonText="Read Our Story"></Button>
            </div>
            <div className=' me-0'>
                <img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/ParisShoot7_v2_1400x.jpg?v=1630493430" alt="" />
            </div>
        </div>
    );
};

export default SatitcBannerTwo;