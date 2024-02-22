import React from 'react';
import DoctorItems from './DoctorItems';
import Carousel from '../temp/Carousel';
import Doctor1 from '../../assets/Doctor1.jpg';
import Doctor2 from '../../assets/Doctor2.jpg';
//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from '../SwiperButtons';
import { FaGreaterThan } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const DoctorCardDisplay = () => {
  //the date is to be gotten from schedule
  const DoctorInfoData = [
    {
      image: Doctor1,
      name: 'Joseph Micah',
      description: 'Senior Therapist at Helpmum',
      history: '30 sessions (20) reviews',
      date: '07 February 24',
    },
    {
      image: Doctor1,
      name: 'Ngozi John',
      description: 'Senior Therapist at Helpmum',
      history: '30 sessions (20) reviews',
      date: '02 February 24',
    },
  ];
  return (
    <div className="flex flex-col mb-8">
      <div className='w-full flex items-center justify-between '>
        <h3 className='text-md font-bold'>Top Health Practioners To Meet </h3>
        <span><FaGreaterThan className=" text-black" /></span>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoHeight={true}
        breakpoints={{
          640: {
            slidesPerView: 2
          }
        }}

        // pagination={{ clickable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='w-full flex items-center '
      >

        {/* <SwiperButtons /> */}
        {DoctorInfoData.map((item, index) => (
          <SwiperSlide className='mt-[20px] h-auto pb-[20px]'>
            <DoctorItems
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              history={item.history}
              date={item.date}
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
};

export default DoctorCardDisplay;
