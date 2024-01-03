
import React, { useContext, useEffect, useRef, useState } from 'react';
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

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])

    
   

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
       {reviews.map(review =>  <SwiperSlide key={review.id}>
            <div className='h-[400px]'>
                <div className='h-20 w-20 m-auto my-6'>
                    <img className='rounded-full ' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
                </div>
                <div className='text-center p-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur accusantium provident neque eligendi, odit excepturi velit corrupti similique harum.</p>
                    <p className='py-3 font-bold'>{review.client_name}</p>
                    <div className='flex justify-center'>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    </div>  
                </div>
            </div>
         </SwiperSlide>)}
        
        
        
        
      </Swiper>
      
      </div>
       </div>
    );
};

export default Reviews;