import './Banner.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
// Autoplay should be in the swiper/modules below
import {  Pagination, Navigation, Autoplay } from 'swiper/modules';
import Button from '../../../components/Button/Button';


const Banner = () => {
    return (
        <div className='banner mt-16'>
          

 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        // Autoplay should be in the modules below
        modules={[  Pagination, Navigation]} 
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=''>
                <div className='absolute z-20 flex flex-col justify-center items-center w-full h-full'>
                    <h3 className=' text-2xl text-white font-bold '>CHOOSE</h3>
                    <h1 className='uppercase text-4xl md:text-6xl lg:text-6xl text-white font-bold mt-4 mb-6'>The latest gadget</h1>
                    <Button buttonText="LEARN MORE"></Button>
                </div>
                <img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/tom-dixon-lp-tile-1.jpg?v=1630492908&width=2000" alt="" />
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className=' '>
                <div className='absolute z-20 flex flex-col justify-center items-center w-full h-full'>
                    
                    <div>
                        <h3 className=' text-2xl text-white font-bold '>CHOOSE</h3>
                        <h1 className='uppercase text-4xl md:text-6xl lg:text-6xl text-white font-bold mt-4 mb-6'>new yearbuds</h1>
                        <Button buttonText="LEARN MORE"></Button>
                    </div>
                    
                </div>
                <img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/mk-lp-tile-1.jpg?v=1630493139&width=2000" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=''>
                    <div className='absolute z-20 flex flex-col justify-center items-center w-full h-full'>
                        <h3 className=' text-2xl text-white font-bold '>CHOOSE</h3>
                        <h1 className='uppercase text-4xl md:text-6xl lg:text-6xl text-white font-bold mt-4 mb-6'>sage collection</h1>
                        <Button buttonText="LEARN MORE"></Button>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2'><img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/sage1-desktop.jpg?v=1630492840&width=2000" alt="" /></div>
                        <div className='w-1/2'><img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/sage2-desktop.jpg?v=1630492847&width=1000" alt="" /></div>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=''>
                 <div className='absolute z-20 flex flex-col justify-center items-center w-full h-full'>
                    <div>
                        <h3 className=' text-2xl text-white font-bold '>CHOOSE</h3>
                        <h1 className='uppercase text-4xl md:text-6xl lg:text-6xl text-white font-bold mt-4 mb-6'>The best gadget</h1>
                        <Button buttonText="LEARN MORE"></Button>
                    </div>   
                </div>
                <img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/heritage-lp-3.jpg?v=1630492874&width=2000" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='absolute z-20 flex flex-col justify-center items-center w-full h-full'>
                    <h3 className=' text-2xl text-white font-bold '>CHOOSE</h3>
                    <h1 className='uppercase text-4xl md:text-6xl lg:text-6xl text-white font-bold mt-4 mb-6'>new jumps & powerbank</h1>
                    <Button buttonText="LEARN MORE"></Button>
                </div>
                <div className=' flex'>
                    <div className='w-1/2'><img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/jump2-desktop.jpg?v=1630492956&width=1000" alt="" /></div>
                    <div className='w-1/2'><img src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/jump1-desktop.jpg?v=1630492933&width=2000" alt="" /></div>       
                </div>
            </div>
        </SwiperSlide>
         
      </Swiper>



        </div>
    );
};

export default Banner;