import React from 'react';
import HealthItemsCard from './HealthItemsCard';
import HealthCardCarousel from './HealthCardCarousel';
import AliceEkpo from '../../assets/AliceEkpo.jpg';
import Practioners from '../../assets/Practioners.jpg';
//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from '../SwiperButtons';
import HealthCard from './HealthCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useSwiper } from 'swiper/react';
import { FaGreaterThan } from 'react-icons/fa6';
import { FaLessThan } from 'react-icons/fa6';

const HealthCardDisplay = () => {
  //the date is to be gotten from schedule
  const HealthCardInfoData = [
    {
      image: AliceEkpo,
      name: 'Joseph Micah',
      description: 'Senior Therapist at Helpmum',
      history: '30 sessions (20) reviews',
      date: '07 February 24',
    },
    {
      image: Practioners,
      name: 'Ngozi John',
      description: 'Senior Therapist at Helpmum',
      history: '30 sessions (20) reviews',
      date: '02 February 24',
    },
  ];

  return (
    <div className="w-full  mb-8 relative">
      <div className="w-full flex items-center justify-between ">
        <h3 className="text-md font-bold">Health Practitioners to meet </h3>
        <span>
          <FaGreaterThan className=" text-black" />
        </span>
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
            slidesPerView: 2,
          },
        }}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 500,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="w-full h-auto "
      >
        {/* <SwiperButtons /> */}

        <SwiperSlide className="mt-[20px]">
          <HealthCard>
            <div className="w-[240] h-[288px]">
              <div>
                <div className="mb-3">
                  <img src={Practioners} alt="Practioners" className="w-full" />
                </div>

                <div className="mb-2">
                  <p className="font-bold text-2xl tracking-wider ">
                    Discover Practitioners
                  </p>
                </div>
                <div className="flex flex-col mb-3 ">
                  <p className="flex items-center">
                    Explore from over 3k health practitioners
                  </p>
                </div>

                <div className="w-full text-white">
                  <button className="text-xl font-medium p-4 bg-blue-500 rounded-xl w-full">
                    Discover Practitioners
                  </button>
                </div>
              </div>
            </div>
          </HealthCard>
        </SwiperSlide>

        {HealthCardInfoData.map((item, index) => {
          return (
            <SwiperSlide className="mt-[20px]">
              <HealthItemsCard
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                history={item.history}
                date={item.date}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HealthCardDisplay;
