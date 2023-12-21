
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Pagination, Navigation } from 'swiper/modules';


const Reviews = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    
   

    return (
       <div className='my-16'>
       <h2 className='text-5xl text-center my-10'>Reviews</h2>
       <div>

       
        <Swiper
        onSwiper={setSwiperRef}
        
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
          }}
      >
        <SwiperSlide>
            <div className='h-[400px]'>
                <div className='h-20 w-20 m-auto my-6'>
                    <img className='rounded-full ' src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg" alt="" />
                </div>
                <div className='text-center p-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur accusantium provident neque eligendi, odit excepturi velit corrupti similique harum.</p>
                    <p className='py-3 font-bold'>client name</p>
                    <div className='flex justify-center'>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    </div>
                     
                </div>
            </div>
         </SwiperSlide>
        <SwiperSlide>
            <div className='h-[400px]'>
                <div className='h-20 w-20 m-auto my-6'>
                    <img className='rounded-full ' src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg" alt="" />
                </div>
                <div className='text-center p-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur accusantium provident neque eligendi, odit excepturi velit corrupti similique harum.</p>
                    <p className='py-3 font-bold'>client name</p>
                    <div className='flex justify-center'>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    </div>
                     
                </div>
            </div>
         </SwiperSlide>
        <SwiperSlide>
            <div className='h-[400px]'>
                <div className='h-20 w-20 m-auto my-6'>
                    <img className='rounded-full ' src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg" alt="" />
                </div>
                <div className='text-center p-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur accusantium provident neque eligendi, odit excepturi velit corrupti similique harum.</p>
                    <p className='py-3 font-bold'>client name</p>
                    <div className='flex justify-center'>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    </div>
                     
                </div>
            </div>
         </SwiperSlide>
        <SwiperSlide>
            <div className='h-[400px]'>
                <div className='h-20 w-20 m-auto my-6'>
                    <img className='rounded-full ' src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg" alt="" />
                </div>
                <div className='text-center p-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur accusantium provident neque eligendi, odit excepturi velit corrupti similique harum.</p>
                    <p className='py-3 font-bold'>client name</p>
                    <div className='flex justify-center'>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    </div>
                     
                </div>
            </div>
         </SwiperSlide>
        
        
        
      </Swiper>
      
      </div>
       </div>
    );
};

export default Reviews;