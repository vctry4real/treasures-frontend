import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// imported Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import NavBar from '../components/NavBar';
import herobg from '../assets/herobg.jpg'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import mountain from '../assets/mountain.svg'
import mountain2 from '../assets/mountain2.svg'
import eclipse from '../assets/eclipse.svg'
import { IoEyeOutline } from "react-icons/io5";
import { IoIosBook } from "react-icons/io";
import { MdOutlineMoreTime } from "react-icons/md";
import eduResources from "../assets/eduResources.svg"
import realtimeConsult from "../assets/realtimeConsult.svg"
import virtualAppoint from "../assets/virtualAppoint.svg"



// Imported Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//hero image
import MockUp from '../assets/Dashboard Mockup.svg';

// Navigation
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const slides = [
    {
      icon: <IoIosBook />,
      title: 'Educational Resources',
      image: eduResources,
      title2: 'Learn and grow together',
      description: "Access a wealth of educational resources to enhance your knowledge in the field.",
    },
    {
      icon: <IoIosBook />,
      title: 'Educational Resources',
      image: eduResources,
      title2: 'Learn and grow together',
      description: "Access a wealth of educational resources to enhance your knowledge in the field.",
    },
    {
      icon: <IoIosBook />,
      title: 'Educational Resources',
      image: eduResources,
      title2: 'Learn and grow together',
      description: "Access a wealth of educational resources to enhance your knowledge in the field.",
    }
  ]

  return (
    <>
      <div className="w-full h-auto  bg-white  overflow-hidden ">
        <div className="w-full h-auto ">
          <NavBar />
          {/* // Hero section */}

          <div className="flex flex-row gap-16 h-screen bg-zinc-200 px-6 items-center justify-center  ">
            <div className="flex flex-col bg-zinc-200 items-center justify-center ">

              {/* background image */}

              <div className='w-full h-full absolute bg-gray-900/90'>
                <img src={herobg} alt='background image' className='w-full h-full object-cover mix-blend-overlay' />
              </div>

              {/* End of background image */}

              <div className='flex flex-col items-center justify-center text-white relative'>
                <div className="md:w-full flex flex-row justify-center mt-[90px]">
                  <h4 className="w-full h-[31px] py-[4px] px-[12px] bg-white rounded-2xl text-center text-gray-900 md:w-[200px] ">
                    Discover Treaures
                  </h4>
                </div>
                <h2 className="w-full h-[80px] font-bold text-4xl text-center pt-8 mb-3 md:text-left ">
                  Your Child Wellness Companion
                </h2>
                <p className="w-full h-[120px] font-medium text-[18px] text-center mt-16 md:text-center md:w-[460px] md:mt-10 ">
                  Discover a world where your child's well-being takes center stage.
                  🌟 With Treasures, every moment becomes a milestone, every
                  question finds an answer, and every concern is met with care.
                </p>
                <div className="md:w-full flex flex-row justify-center ">
                  <button
                    className="flex items-center justify-center font-bold text-primary bg-secondary tracking-wider rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4  "
                    onClick={() => {
                      navigate('/auth');
                    }}
                  >
                    Get Started{' '}
                    <span className="pl-2">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            {/* <div className="hidden md:flex p-6">
              <img src={MockUp} alt="hero" className="w-[473px] h-[500px]" />
            </div> */}
          </div>
          {/* Hero Ends */}

          {/* <div className='flex flex-col items-center justify-center py-8 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl mb-8'> */}
          {/* <p>Unleash the full potential of your little ones with a holistic approach to wellness, blending the best of healthcare, education, and support.</p> */}

          {/* </div> */}

          {/* cards Treasures  */}
          <div className='w-full '>
            <div className='flex space-x-16 py-4 relative'>
              <svg className="absolute top-8 right-0 md:top-[-10px]" width="65" height="91" viewBox="0 0 65 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M40.509 19.6713C43.339 10.9616 55.661 10.9616 58.491 19.6713C59.7566 23.5665 63.3864 26.2037 67.4819 26.2037C76.6399 26.2037 80.4476 37.9226 73.0387 43.3055C69.7253 45.7128 68.3388 49.9799 69.6044 53.875C72.4344 62.5848 62.4657 69.8274 55.0567 64.4445C51.7433 62.0372 47.2567 62.0372 43.9433 64.4445C36.5343 69.8274 26.5656 62.5848 29.3956 53.875C30.6612 49.9799 29.2747 45.7128 25.9614 43.3055C18.5524 37.9226 22.3601 26.2037 31.5181 26.2037C35.6137 26.2037 39.2434 23.5665 40.509 19.6713Z" fill="#FF0F00" />
                <circle cx="49" cy="42" r="11" fill="white" />
                <path d="M45 46C48.1928 49.1772 49.9487 49.0901 53 46" stroke="black" />
                <path d="M44 39C44.3991 37.6482 44.6186 37.6852 45 39" stroke="black" />
                <path d="M53 39C53.3991 37.6482 53.6186 37.6852 54 39" stroke="black" />
              </svg>
            </div>
            <div className="bg-white w-full flex flex-col items-center justify-center p-6">
              <div className="flex flex-col mt-6">

                <div className='w-full flex items-center'>
                  <div className="flex flex-col text-left md:text-center md:w-full">
                    <h3 className="font-bold text-xl text-gray-900 text-left pt-8 md:text-center">
                      Empowering Parents
                    </h3>
                    <h3 className="font-bold text-xl text-gray-900 text-left md:text-center md:font-light text-md">
                      Enriching Childhoods
                    </h3>
                  </div>

                </div>

                <p className="font-medium text-[18px] text-left mt-1 md:text-center md:mt-4">
                  {' '}
                  Join us on this extraordinary journey where yoyr child's well
                  being is the ultimate treasure. Get ready to explore, learn, and
                  cherish every moment with Treasures 💖.
                </p>
              </div>

              {/* First card */}
              <div className="md:flex flex-row gap-9 mt-6 items-center justify-center w-full ">
                <div className="flex flex-col h-[267px] rounded-md bg-secondary-100 items-center justify-center px-5">
                  <div className="w-[340px] h-[96px] bg-gray-500 text-center rounded-md text-black">
                    <img src={card1} alt='card1' />
                  </div>
                  <div className="w-[340px] h-[123px]">
                    <h3 className="font-bold text-xl text-gray-900 text-left pt-8 ">
                      👶 Nurture Their Potential
                    </h3>
                    <p>
                      From virtual appointments to educational resources, Treasures
                      is your key to fostering a happy and healthy childhood.
                    </p>
                  </div>
                </div>

                {/* Second card */}
                <div className="flex flex-col mt-6 h-[267px] rounded-md bg-secondary-100 items-center justify-center px-5 md:mt-0">
                  <div className="w-[340px] h-[96px] bg-gray-500 text-center rounded-md text-black">
                    <img src={card2} alt='card2' />
                  </div>
                  <div className="w-[340px] h-[123px]">
                    <h3 className="font-bold text-xl text-gray-900 text-left pt-8 ">
                      🌈 Every Child is a Treasure
                    </h3>
                    <p>
                      Unleash the full potential of your little ones with a holistic approach to wellness, blending the best of healthcare, education, and support.
                    </p>
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
          </div>
          {/* Card Ends Here */}

          {/* About Treasures  */}

          <div className="flex flex-col items-center justify-center bg-slate-50 p-6">
            <div className=" items-center justify-center">
              <h2 className="font-bold text-xl text-gray-900 text-left pt-8 md:text-center">
                About Treasures
              </h2>
              <h3 className="font-medium text-lg text-gray-900 text-left pt-6 md:text-center">
                Welcome to Treasures, Where Every Child's Well-being Matters
              </h3>
              <p className="font-light text-[18px] text-left pt-4 tracking-wide text-gray-900 md:text-center">
                At Treasures, we believe in nurturing not just bodies, but bright
                futures. Our comprehensive child wellness app is designed to be
                your partner in the journey of parenting. From virtual healthcare
                to educational resources, we've got the tools you need to make
                every moment count.
              </p>
            </div>
            <button className="flex items-center w-full justify-center text-gray-900 text-lg bg-transparent rounded-2xl h-[56px] mt-8 -mb-14 py-2 px-4 text-md font-bold">
              Explore Features{' '}
              <span className="pl-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
          {/* About end */}

          {/* Key Features */}

          <div>
            {/* Sun and Land Image */}
            <div className='w-full flex  justify-center '>
              <img src={mountain} alt='mountain' className='hidden -mr-16 md:block' />
              <img src={mountain} alt='mountain' className='hidden -mr-16 md:block' />
              <img src={mountain} alt='mountain' className='hidden -mr-16 md:block' />
              <img src={mountain} alt='mountain' className='hidden -mr-16 md:block' />
              {/* mobile start */}
              <img src={mountain} alt='mountain' className='-mr-16' />
              <img src={eclipse} alt='eclipse' className=' relative' />
              <img src={mountain2} alt='mountain' className='-ml-16' />
              {/* mobile ends */}
              <img src={mountain2} alt='mountain' className='hidden -ml-16 md:block' />
              <img src={mountain2} alt='mountain' className='hidden -ml-16 md:block' />
              <img src={mountain2} alt='mountain' className='hidden -ml-16 md:block' />
              <img src={mountain2} alt='mountain' className='hidden -ml-16 md:block' />
            </div>
          </div>
          <div className="flex flex-col bg-primary items-center justify-center p-6 ">
            <h2 className="font-bold text-xl text-white text-left mb-8 pt-8">
              Key Features
            </h2>

            <div className="items-center justify-center bg-white rounded-xl md:w-[700px] overflow-hidden">
              {/* Swiper for carousel */}
              <Swiper

                // install Swiper modules
                // modules={[Pagination]}
                spaceBetween={100}
                slidesPerView={2} // Set to 1 for smaller screens
                // pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                // className='px-8'
              >
                {
                  slides.map((slide) => {
                    return (
                      <SwiperSlide>
                        <div className="w-[382px] h-[488px] mb-3">
                          <div>
                            <div className="w-5 h-5 rounded-full"></div>
                            <h3 className='flex items-center'><span className='mr-4'>{slide.icon}</span>{slide.title}</h3>
                          </div>
                          <div className="mt-2 bg-gray-300">
                            <img src={slide.image} alt='educational resources' className="w-full h-full " />
                          </div>
                          <div>
                            <h4 className="font-bold text-md my-2">
                              {slide.title2}
                            </h4>
                            <p>
                              {slide.description}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }

              </Swiper>
            </div>

            <button className="flex items-center justify-center text-white bg-transparent rounded-2xl w-full h-[56px] m-10 py-2 px-4 text-md font-bold md:w-full md:h-[60px] md:items-center">
              Start your Journey{' '}
              <span className="pl-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
          {/* End of key Features */}

          {/* Why Treasures */}
          <div className="w-full flex flex-col  bg-white p-6">
            <div className="flex flex-col items-start justify-center  ">
              <h2 className="font-bold text-xl text-gray-900 pt-8">
                Why Treasures
              </h2>
              <p className="font-light text-[18px] text-left pt-4 tracking-wide text-gray-900">
                At Treasures, we're more than an app. We're your partner in
                raising happy, healthy kids. Our holistic approach combines
                cutting-edge technology with a wealth of educational content, all
                centered around your child's well-being.
              </p>
              <button className="flex items-center text-gray-900 bg-transparent rounded-2xl w-[193px] h-[56px] mt-4 py-2 text-md font-bold">
                See the difference{' '}
                <span className="pl-2">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          {/* End Of Why Treasures */}

          {/* Join Treasures Today */}
          <div className=" w-full pt-1 bg-[#E5EEEE] p-6">
            <div className="flex flex-col items-center justify-center mt-[90px]">
              <h2 className="w-full h-[50px] font-bold text-4xl text-gray-900 text-center pt-1 mb-1 ">
                Join Treasures Today
              </h2>
              <h3 className=" w-full h-[80px] font-medium text-2xl text-gray-900 text-center pt-1 mb-3 md:w-[600px] md:h-auto ">
                Ready to start your child's wellnes Journey
              </h3>
              <p className="w-full h-[120px] font-medium text-[18px] text-center mt-4 md:w-[650px]">
                Join Treasures today and embark on a path to better child
                well-being. It's more than an app; it's a treasure trove of tools
                for nurturing happy and healthy kids. Let's make every moment
                count.
              </p>
              <button className="flex items-center justify-center text-white bg-[#00A700] rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4">
                Sign Up Now{' '}
                <span className="pl-2">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          {/* Join Treasures Today */}

          {/* Testimonies */}
          <div className="w-full md:w-100% flex flex-col items-center justify-center p-6">
            <div className="bg-white w-full md:w-[600px]">
              <div className="flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-bold text-xl text-gray-900 pt-8 md:text-center">
                    Testimonies
                  </h2>
                  <h3 className="font-medium text-md text-gray-900 pt-2 md:text-center">
                    Treasured by Parents, Loved by Experts
                  </h3>
                  <p className="font-light text-[18px] text-left pt-4 tracking-wide text-gray-900  md:text-center">
                    See what Parents, Primary and Secondary Schools administrators
                    and Healthcare Professionals are saying about Treasures.
                  </p>
                </div>
                <div className="flex flex-col w-full h-auto items-center justify-center bg-[#FAFAFA] mt-3 mb-3 rounded-xl">
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
                      <div className="w-full md:w-[382px] h-auto p-2 ">
                        <p className="text-left mb-3">
                          Lorem ipsum dolor sit amet consectetur. Tristique nisl
                          ultricies maecenas vel arcu integer magna Scelerisque eu
                          gravida praesent eget.
                        </p>
                        <h3 className="text-left font-medium text-gray-900">
                          name
                        </h3>
                        <h3 className="font-medium text-gray-900">name</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full md:w-[382px] h-auto p-2 ">
                        <p className="text-left mb-3">
                          Lorem ipsum dolor sit amet consectetur. Tristique nisl
                          ultricies maecenas vel arcu integer magna Scelerisque eu
                          gravida praesent eget.
                        </p>
                        <h3 className="text-left font-medium text-gray-900">
                          name
                        </h3>
                        <h3 className="font-medium text-gray-900">name</h3>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <button className="flex items-center text-gray-900 bg-transparent rounded-2xl w-full h-[56px] mt-4 py-2 text-md font-bold">
                  Read Testimonials{' '}
                  <span className="pl-2">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer here */}
          <div className="flex flex-col bg-primary  items-center justify-center p-6 md:grid grid-cols-1  ">
            <div className=" items-center justify-center">
              <h2 className="font-bold text-xl text-white text-left pt-8">
                Get In Touch
              </h2>
              <h3 className="font-medium w-full text-lg text-white text-left pt-6">
                Have Questions? Our support teams are available 24/7
              </h3>
              <p className="font-thin text-sm text-left pt-4 tracking-wide text-white">
                Need assistance, want to learn more? Or partner with us. Get in
                touch with Treasure today.
              </p>
              <div className='w-full flex justify-start'>
                <button className="flex items-center text-white bg-transparent rounded-2xl w-[193px] h-[56px] py-2 text-md font-bold md:justify-start md:m-0 md:p-0">
                  Contact us{' '}
                  <span className="pl-2">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full items-center justify-center border-t">
              {/* Grid list comes here */}
              <ul className="w-full grid grid-cols-2 gap-5 pt-8 md:grid-cols-3">
                <div className=" pb-6">
                  <li className="w-full text-white text-lg font-normal mr-4 ">
                    Contact Information
                  </li>
                  <div className="flex flex-col gap-3">
                    <div className="flex md:flex flex-row gap-2 mt-3">
                      <li className="text-white text-md font-extralight">
                        Email:
                      </li>
                      <li className="text-white text-md font-extralight">
                        treasures@gmail.com
                      </li>
                    </div>
                    <div className="flex md:flex flex-row gap-2">
                      <li className="text-white text-md font-extralight">
                        Phone:
                      </li>
                      <li className="text-white text-md font-extralight">
                        +234806748327
                      </li>
                    </div>
                  </div>
                </div>

                <div className=" ml-auto pb-6">
                  <li className="text-white text-lg font-normal mr-4 ">
                    Connect With Us
                  </li>
                  <div className="flex flex-col gap-3 mt-3">
                    <li className="text-white text-md font-extralight">
                      Facebook
                    </li>
                    <li className="text-white text-md font-extralight">
                      Twitter
                    </li>
                    <li className="text-white text-md font-extralight">
                      Instagram
                    </li>
                  </div>
                </div>

                <div className="w-full pb-6">
                  <li className="w-full text-white text-lg font-normal mr-4 ">
                    Download the App
                  </li>
                  <div className="flex flex-col gap-3 mt-3">
                    <li className="text-white text-md font-extralight">
                      App store
                    </li>
                    <li className="text-white text-md font-extralight">
                      Google Play
                    </li>
                  </div>
                </div>
              </ul>
              {/* Grid ends here */}

              {/* News letter */}
              <p className="text-md font-medium text-white">
                Subscribe to Our Newsletter
              </p>
              <form
                action="#"
                method="post"
                className="pt-2 max-w-sm  rounded  shadow-xl"
              >
                <input
                  placeholder="Enter email"
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-[40px] px-2 md:w-[500px] md:px-5"
                />

                <button className="w-full h-[40px] text-primary font-bold bg-secondary text-center mt-4 md:w-[500px] md:px-5">
                  Subscribe Now
                </button>
              </form>
              {/* News letter Ends here*/}
              <p className="text-white text-sm mt-4 ">
                Treasures - Transforming Lives Through Digital Wellness© 2024
                Treasures. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
