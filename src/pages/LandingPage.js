import React from "react";
import { FaArrowRight } from "react-icons/fa";
// imported Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import NavBar from "../components/NavBar";

// Imported Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//hero image
import MockUp from "../assets/Dashboard Mockup.svg"


const LandingPage = () => {
  return (

    <>
    <NavBar />
    // Hero section 
    <div className="w-full h-auto mt-[20px]  bg-white ">
      
        <div className="flex flex-row gap-16 h-screen bg-zinc-200 items-center justify-center pt-[90px] ">
          <div className="flex flex-col bg-zinc-200 items-center justify-center ">
            <div className="md:w-full flex flex-row justify-start">
              <h4 className="w-[180px] h-[31px] py-[4px] px-[12px] rounded-2xl bg-white text-center text-gray-900 ">
                  Discover Treaures
              </h4>
            </div>
            <h2 className="w-[460px] h-[80px] font-bold text-4xl text-gray-900 text-center pt-8 mb-3 md:text-left ">
                Your Child Wellness Companion
            </h2>
            <p className="w-[390px] h-[120px] font-medium text-[18px] text-center mt-16 md:text-left md:w-[460px] " >
              Discover a world where your child's well-being takes center stage. 🌟 With Treasures, every moment becomes a milestone, every question finds an answer, and every concern is met with care.
            </p>
            <div className="md:w-full flex flex-row justify-start ">
              <button className="flex items-center justify-center text-white bg-black rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4 ">Get Started <span className="pl-2"><FaArrowRight /></span></button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:flex">
            <img
              src={MockUp} alt="hero"
              className="w-[473px] h-[500px]"
            />
          </div>
        </div>
      {/* Hero Ends */}

        {/* <div className='flex flex-col items-center justify-center py-8 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl mb-8'> */}
          {/* <p>Unleash the full potential of your little ones with a holistic approach to wellness, blending the best of healthcare, education, and support.</p> */}
          
        {/* </div> */}

         {/* cards Treasures  */}

        <div  className="bg-white w-full flex flex-col items-center justify-center ">
          <div className="flex flex-col m-6 ">
            <div className=" flex flex-col text-left">
              <h3 className="font-bold text-xl text-gray-900 text-left pt-8 md:text-center ">Empowering Parents</h3>
              <h3 className="font-bold text-xl text-gray-900 text-left md:text-center md:font-light text-md">Enriching Childhoods</h3>
            </div>
            <p className="font-medium text-[18px] text-left mt-1 md:text-center md:mt-4"> Join us on this extraordinary journey where yoyr child's well being is the ultimate treasure. Get ready to explore, learn, and cherish every moment with Treasures 💖.</p>
          </div>

          {/* First card */} 
          <div className="md:flex flex-row w-full ">
            <div className="flex flex-col m-6 w-full h-[267px] rounded-md bg-gray-300 items-center justify-center">
              <div className="w-[340px] h-[96px] bg-gray-500 text-center rounded-md text-black">
                  Image Goes Here
              </div>
              <div className="w-[340px] h-[123px] bg-gray-300">
                <h3 className="font-bold text-xl text-gray-900 text-left pt-8 ">👶 Nurture Their Potential</h3>
                <p>From virtual appointments to educational resources, Treasures is your key to fostering a happy and healthy childhood.</p>
              </div>
            </div>

            {/* Second card */}
            <div className="flex flex-col m-6 w-full h-[267px] rounded-md bg-gray-300 items-center justify-center">
              <div className="w-[340px] h-[96px] bg-gray-500 text-center rounded-md text-black">
                  Image Goes Here
              </div>
              <div className="w-[340px] h-[123px] bg-gray-300">
                <h3 className="font-bold text-xl text-gray-900 text-left pt-8 ">👶 Nurture Their Potential</h3>
                <p>From virtual appointments to educational resources, Treasures is your key to fostering a happy and healthy childhood.</p>
              </div>
            </div>
          </div>

          {/* Third card */}
          {/* <div className="flex flex-col m-6 w-[372px] h-[267px] rounded-md bg-gray-300 items-center justify-center">
            <div className="w-[340px] h-[96px] bg-gray-500 text-center rounded-md text-black">
                Image Goes Here
            </div>
            <div className="w-[340px] h-[123px] bg-gray-300">
              <h3 className="font-bold text-xl text-gray-900 text-left pt-8 ">👶 Nurture Their Potential</h3>
              <p>From virtual appointments to educational resources, Treasures is your key to fostering a happy and healthy childhood.</p>
            </div>
          </div> */}

        </div>
        {/* Card Ends Here */}

        {/* About Treasures  */}

        <div  className="flex flex-col items-center justify-center m-6">
          <div className=" items-center justify-center">
            <h2 className="font-bold text-xl text-gray-900 text-left pt-8 md:text-center">About Treasures</h2>
            <h3 className="font-medium text-lg text-gray-900 text-left pt-6 md:text-center">Welcome to Treasures, Where Every Child's Well-being Matters</h3>
            <p className="font-light text-[18px] text-left pt-4 tracking-wide text-gray-900 md:text-center">At Treasures, we believe in nurturing not just bodies, but bright futures. Our comprehensive child wellness app is designed to be your partner in the journey of parenting. From virtual healthcare to educational resources, we've got the tools you need to make every moment count.</p>
          </div>
          <button className="flex items-center justify-center text-gray-900 bg-transparent rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4 text-md font-bold">Explore Features <span className="pl-2"><FaArrowRight /></span></button>
        </div>
        {/* About end */}

        {/* Key Features */}

        <div  className="flex flex-col bg-gray-950 items-center justify-center ">
          <h2 className="font-bold text-xl text-white text-left mb-8 pt-8">Key Features</h2>
          <div className=" items-center justify-center bg-gray-200 rounded-xl md:w-[600px]">
            {/* Swiper for carousel */}
            <Swiper
              className="w-[372px] h-auto md:w-full"
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className="w-[382px] h-[488px] px-8 md:w-full">
                  <div>
                    <div className="w-5 h-5 rounded-full"></div>
                    <h3>Virtaul appointments</h3>
                  </div>
                  <div className=" h-[280px] my-2 bg-gray-300">
                    Image goes here
                  </div>
                  <div>
                    <h4 className="font-medium text-md">Connect with Experts, Anytime, Anywhere</h4>
                    <p>
                      Say goodbye to long waiting times. With Treasures, book virtual appointments with healthcare professionals effortlessly. Your child's health, your schedule.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="w-[382px] h-[488px] px-8 md:w-full">
                  <div>
                    <div className="w-5 h-5 rounded-full"></div>
                    <h3>Virtaul appointments</h3>
                  </div>
                  <div className=" h-[280px] my-2 bg-gray-300">
                    Image goes here
                  </div>
                  <div>
                    <h4 className="font-medium text-md">Connect with Experts, Anytime, Anywhere</h4>
                    <p>
                      Say goodbye to long waiting times. With Treasures, book virtual appointments with healthcare professionals effortlessly. Your child's health, your schedule.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="w-[382px] h-[488px] px-8 md:w-full">
                  <div>
                    <div className="w-5 h-5 rounded-full"></div>
                    <h3>Virtaul appointments</h3>
                  </div>
                  <div className=" h-[280px] my-2 bg-gray-300">
                    Image goes here
                  </div>
                  <div>
                    <h4 className="font-medium text-md">Connect with Experts, Anytime, Anywhere</h4>
                    <p>
                      Say goodbye to long waiting times. With Treasures, book virtual appointments with healthcare professionals effortlessly. Your child's health, your schedule.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              
              
            </Swiper>
          </div>
          <button className="flex items-center justify-center text-white bg-transparent rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4 text-md font-bold">Start your journer <span className="pl-2"><FaArrowRight /></span></button>
        </div>
        {/* End of key Features */}


      {/* Why Treasures */}
        <div className="flex flex-col bg-white">
          <div className="flex flex-col items-start justify-center  m-6">
            <h2 className="font-bold text-xl text-gray-900 pt-8">Why Treasures</h2>
            <p className="font-light text-[18px] text-left pt-4 tracking-wide text-gray-900">At Treasures, we're more than an app. We're your partner in raising happy, healthy kids. Our holistic approach combines cutting-edge technology with a wealth of educational content, all centered around your child's well-being.</p>
            <button className="flex items-center text-gray-900 bg-transparent rounded-2xl w-[193px] h-[56px] mt-4 py-2 text-md font-bold">See the difference <span className="pl-2"><FaArrowRight /></span></button>
          </div>
        </div>

      {/* End Of Why Treasures */}

      {/* Join Treasures Today */}
        <div className=" pt-1 bg-zinc-200">
          <div className="flex flex-col items-center justify-center mt-[90px]">
              <h2 className="w-[460px] h-[50px] font-bold text-4xl text-gray-900 text-center pt-1 mb-1 ">
                Join Treasures Today
              </h2>
              <h3 className="w-[460px] h-[80px] font-medium text-2xl text-gray-900 text-center pt-1 mb-3 md:w-[600px] md:h-auto ">
                Ready to start your child's wellnes Journey
              </h3>
              <p className="w-[390px] h-[120px] font-medium text-[18px] text-center mt-4 md:w-[650px]" >
                Join Treasures today and embark on a path to better child well-being. It's more than an app; it's a treasure trove of tools for nurturing happy and healthy kids. Let's make every moment count.
              </p>
              <button className="flex items-center justify-center text-white bg-black rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4">Sign Up Now <span className="pl-2"><FaArrowRight /></span></button>
          </div>
        </div>
      {/* Join Treasures Today */}

      {/* Testimonies */}
      <div className="w-full md:w-100% flex flex-col items-center justify-center">
        <div className="bg-white w-full md:w-[600px]">
          <div className="flex flex-col items-center justify-center mx-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-xl text-gray-900 pt-8 md:text-center">Testimonies</h2>
              <h3 className="font-medium text-md text-gray-900 pt-2 md:text-center">Treasured by Parents, Loved by Experts</h3>
              <p className="font-light text-[18px] text-left pt-4 tracking-wide text-gray-900  md:text-center">
                See what parents and healthcare professionals are saying about Treasures. Real stories, real impact.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto items-center justify-center bg-gray-200 mt-3 mb-8 rounded-xl">
              {/* Swiper for carousel */}
              <Swiper
                className="w-full md:w-[372px] h-[150px]"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div className="w-full md:w-[382px] h-auto px-1 py-1">
                    <p className="text-left">
                      Lorem ipsum dolor sit amet consectetur. Tristique nisl ultricies maecenas vel arcu integer magna Scelerisque eu gravida praesent eget.
                    </p>
                    <h3 className="text-left font-medium text-gray-900">name</h3>
                    <h3 className="font-medium text-gray-900">name</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full md:w-[382px] h-auto px-1 py-1">
                    <p className="text-left">
                      Lorem ipsum dolor sit amet consectetur. Tristique nisl ultricies maecenas vel arcu integer magna Scelerisque eu gravida praesent eget.
                    </p>
                    <h3 className="text-left font-medium text-gray-900">name</h3>
                    <h3 className="font-medium text-gray-900">name</h3>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Footer here */}
      <div  className="flex flex-col bg-black  items-center justify-center p-6 md:grid grid-cols-1  ">
          <div className=" items-center justify-center">
            <h2 className="font-bold text-xl text-white text-left pt-8">Get In Touch</h2>
            <h3 className="font-medium text-lg text-white text-left pt-6">Have Questions? We're Here</h3>
            <p className="font-light text-[18px] text-left pt-4 tracking-wide text-white">Need assistance or want to learn more? Our team is ready to help. GEt in touch with Treasure today.</p>
            <button className="flex items-center justify-center text-white bg-transparent rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4 text-md font-bold md:justify-start md:m-1 md:p-0">Explore Features <span className="pl-2"><FaArrowRight /></span></button>
          </div>
          
          
          <div className=" items-center justify-center border-t">
            
            {/* Grid list comes here */}
            <ul className="grid grid-cols-2 pt-8 md:grid-cols-3">
              <div className=" pb-6">
                <li className="text-white text-lg font-normal mr-4 ">Contact Information</li>
                <div className="flex flex-col">
                  <div className="md:flex flex-row gap-2">
                    <li className="text-white text-md font-extralight">Email:</li>
                    <li className="text-white text-md font-extralight">treasures@gmail.com</li>
                  </div>
                  <div className="md:flex flex-row gap-2">
                    <li className="text-white text-md font-extralight">Phone:</li>
                    <li className="text-white text-md font-extralight">+234806748327</li>
                  </div>
                </div>
              </div>

              <div className=" pb-6">
                <li className="text-white text-lg font-normal mr-4 ">Connect With Us</li>
                <div className="flex flex-col">
                  <li className="text-white text-md font-extralight">Facebook</li>
                  <li className="text-white text-md font-extralight">Twitter</li>
                  <li className="text-white text-md font-extralight">Instagram</li>
                  
                </div>
              </div>

              <div className=" pb-6">
                <li className="text-white text-lg font-normal mr-4 ">Download the App</li>
                <div className="flex flex-col">
                  <li className="text-white text-md font-extralight">App store</li>
                  <li className="text-white text-md font-extralight">Google Play</li>
                  
                </div>
              </div>

            </ul>
            {/* Grid ends here */}

            {/* News letter */}
            <p className="text-md font-medium text-white">Subscribe to Our Newsletter</p>
            <form action="#" method="post" className="pt-2 max-w-sm  rounded  shadow-xl">
              <input
                placeholder="Enter email"
                type="email"
                name="email"
                id="email"
                className="w-full h-[40px] px-2 md:w-[500px] md:px-5"
              
              />
              
              <button className="w-full h-[40px] text-white bg-gray-700 text-center mt-4 md:w-[500px] md:px-5">Subscribe Now</button>

            </form>
            {/* News letter Ends here*/}
            <p className="text-white text-sm mt-4 ">Treasures - Transforming Lives Through Digital Wellness © 2024 Treasures. All rights reserved.</p>
          </div>
      </div>
        
    </div>
    </>
  );
};

export default LandingPage;
