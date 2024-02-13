import React from 'react';
// import { FaLongArrowAltRight } from 'react-icons/fa';
// import { FaGreaterThan } from 'react-icons/fa';
// import { PiHandWavingFill } from 'react-icons/pi';
// import { IoBookSharp } from 'react-icons/io5';
// import { IoFolderSharp } from 'react-icons/io5';
// import { FaPhoneAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { useRef, useState } from 'react';
// import progress from '../assets/progress.svg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import LateefatOdubanjo from '../assets/LateefatOdubanjo.jpg';
// import DevonLane from '../assets/DevonLane.jpg';
// import KathrynMurphy from '../assets/KathrynMurphy.jpg';
// import CameronWilliams from '../assets/CameronWilliams.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import DoctorCardDisplay from '../(doctorCards)/DoctorCardDisplay';
import HealthCardDisplay from '../(healthPractioners)/HealthCardDisplay';
import Navbar from './Navbar';
import SideNav from './SideNav';
import DashboardProvider from '../../providers/DashboardProvider';

const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className="h-screen">
        <Navbar />
        <div className="flex h-[90%]">
          <SideNav />
          <Outlet />
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;

// <div className="p-4 sm:ml-64">
//   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
//     <div className="flex flex-col items-center gap-2 text-left p-2 h-auto mb-9 rounded-xl bg-primary">
//       <p className="w-full text-md text-white text-left">
//         Get Started with Treasure Consultant
//       </p>
//       <h3 className="w-full flex items-center text-white text-left text-md font-bold">
//         Browse Health Professional{' '}
//         <span className="pl-2 mr-2">
//           <FaLongArrowAltRight />
//         </span>
//       </h3>
//     </div>
//     <div className="flex flex-row gap-8 mb-6">
//       <div className="flex flex-col items-center justify-center rounded bg-transparent">
//         <div className="text-left w-full">
//           {' '}
//           {/* Add text-left class here */}
//           <h3 className="text-xl text-gray-800 flex flex-grow items-center font-semibold">
//             Welcome{' '}
//             <span className="ml-2">
//               <PiHandWavingFill className="text-yellow-500" />
//             </span>
//           </h3>
//           <p className="text-md text-gray-900">
//             You have an upcoming session
//           </p>
//         </div>
//       </div>
//       <div className="">
//         <button className="p-2 rounded-2xl border  ml-auto w-[120px] bg-slate-100">
//           See upcoming
//         </button>
//       </div>
//     </div>

//     {/* Children's profiles */}
//     <div className="flex flex-row gap-2 mb-4">
//       <div className="flex flex-col items-center justify-center rounded bg-transparent">
//         <div className="text-left">
//           {' '}
//           {/* Add text-left class here */}
//           <h3 className="text-lg text-gray-800">
//             Your children's profiles
//           </h3>
//           <p className="text-[13px] text-gray-900 ">
//             You have no child profile, please tap the add button to add
//             your child(ren)
//           </p>
//         </div>
//       </div>
//       <div className="">
//         <FaGreaterThan />
//       </div>
//     </div>

//     {/* Add child profile Icon */}

//     <div className="flex flex-col items-center rounded h-28">
//       <div className="flex flex-col items-start justify-start w-full ">
//         <Link to="/">
//           <div className="flex items-center justify-center bg-gray-200 w-[64px] h-[64px] rounded-full px-4 py-2 border-2 border-gray-900 shadow-sm ">
//             <svg
//               className="w-3.5 h-3.5 "
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="black"
//               viewBox="0 0 18 18"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 1v16M1 9h16"
//               />
//             </svg>
//           </div>
//         </Link>
//         <p className="text-md text-left text-gray-900">Add child</p>
//       </div>
//     </div>

//     {/* Add child profile  ends here*/}

//     {/*Book An Appointment*/}
//     <div className="flex items-center justify-center p-4 mb-7 rounded-2xl bg-gray-100">
//       <div>
//         <p className=" flex flex-row items-center text-2xl text-gray-400 dark:text-gray-500">
//           {' '}
//           <span className="mr-3">
//             <IoBookSharp />
//           </span>
//           Book Appointment
//         </p>
//       </div>
//     </div>
//     {/* Book An Appointment Ends Here */}

//     {/* Features Carousel */}
//     <Swiper
//       slidesPerView={'1'}
//       spaceBetween={100}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//       {/* Slide 1 */}
//       <SwiperSlide>
//         <div className="flex flex-col items-center justify-center rounded p-2 mb-7 bg-pink-50 h-28">
//           <Link to={'/'} className="w-full mb-3">
//             <div className="w-full flex items-center">
//               <h3 className=" font-bold">Schedule</h3>
//               <div className="ml-auto">
//                 <FaGreaterThan />
//               </div>
//             </div>
//           </Link>
//           <div className="w-full flex items-center gap-4">
//             <div>
//               <IoFolderSharp />
//             </div>
//             <div className="">
//               <p className="text-md text-gray-400">
//                 You Have no schedules.
//               </p>
//               <p className="font-bold ">Browse Health professionals</p>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 2 */}
//       <SwiperSlide>
//         <div className="flex flex-col items-center justify-center rounded p-2 mb-7 bg-gray-100 h-28">
//           <Link to={'/'} className="w-full mb-3">
//             <div className="w-full flex items-center">
//               <h3 className="mb-3 font-bold">Consultations</h3>
//               <div className="ml-auto">
//                 <FaGreaterThan />
//               </div>
//             </div>
//           </Link>
//           <div className="w-full flex items-center gap-4">
//             <div>
//               <FaPhoneAlt />
//             </div>
//             <div className="">
//               <p className="text-md text-gray-400">Completed 0 Mins.</p>
//               <svg
//                 width="90"
//                 height="12"
//                 viewBox="0 0 90 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clipPath="url(#clip0_1326_4629)">
//                   <rect
//                     y="0.5"
//                     width="122"
//                     height="11"
//                     rx="2"
//                     fill="#1A96F0"
//                   />
//                   <rect
//                     x="40"
//                     y="0.5"
//                     width="82"
//                     height="11"
//                     fill="white"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1326_4629">
//                     <rect
//                       y="0.5"
//                       width="122"
//                       height="11"
//                       rx="2"
//                       fill="white"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 3 */}
//       <SwiperSlide>
//         <div className="flex flex-col items-center justify-center rounded p-2 mb-7 bg-pink-50 h-28">
//           <Link to={'/'} className="w-full mb-3">
//             <div className="w-full flex items-center">
//               <h3 className="mb-3 font-bold">Schedule</h3>
//               <div className="ml-auto">
//                 <FaGreaterThan />
//               </div>
//             </div>
//           </Link>
//           <div className="w-full flex items-center gap-4">
//             <div>
//               <IoFolderSharp />
//             </div>
//             <div className="">
//               <p className="text-md text-gray-400">
//                 You Have no schedules.
//               </p>
//               <p className="font-bold ">Browse Health professionals</p>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//     {/* Features Carousel End */}

//     <DoctorCardDisplay />

//     <HealthCardDisplay />

//     {/* Consultatants section */}

//     <div className="flex flex-col gap-5 items-center w-full justify-center h-auto mb-4 rounded">
//       <div className="flex w-full items-center">
//         <h1 className="text-xl text-left font-bold">
//           Recent Consultations
//         </h1>
//         <p className="text-md font-light ml-auto">View all</p>
//       </div>
//       <div className="flex w-full flex-col gap-7">
//         {/* Consultants N0 1 */}
//         <div className=" w-full flex flex-row items-center">
//           <div className=" flex items-center justify-start text-lef m">
//             <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
//               <img
//                 src={LateefatOdubanjo}
//                 alt="/"
//                 className="w-[40px] h-[40px] rounded-full"
//               />
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Latifat Odubanjo</p>
//               <p className="text-md font-medium">
//                 Senior Physiotherapist
//               </p>
//             </div>
//           </div>
//           <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
//             Message
//           </button>
//         </div>

//         {/* Consultants N0 2 */}
//         <div className=" w-full flex flex-row items-center">
//           <div className=" flex items-center justify-start text-lef m">
//             <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
//               <img
//                 src={DevonLane}
//                 alt="/"
//                 className="w-[40px] h-[40px]"
//               />
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Devon Lane</p>
//               <p className="text-md font-medium">Senior Dental Officer</p>
//             </div>
//           </div>
//           <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
//             Message
//           </button>
//         </div>

//         {/* Consultants N0 3 */}
//         <div className=" w-full flex flex-row items-center">
//           <div className=" flex items-center justify-start text-lef m">
//             <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
//               <img
//                 src={CameronWilliams}
//                 alt="/"
//                 className="w-[40px] h-[40px]"
//               />
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Cameron Williamson</p>
//               <p className="text-md font-medium">Paediatrics Dentist</p>
//             </div>
//           </div>
//           <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
//             Message
//           </button>
//         </div>

//         {/* Consultants N0 4 */}
//         <div className=" w-full flex flex-row items-center">
//           <div className=" flex items-center justify-start text-lef m">
//             <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
//               <img
//                 src={KathrynMurphy}
//                 alt="/"
//                 className="w-[40px] rounded-full h-[40px]"
//               />
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Kathryn Murphy</p>
//               <p className="text-md font-medium">Paediatrics Surgeon</p>
//             </div>
//           </div>
//           <button className="w-1/4 px-1 py-1 border border-gray-300 rounded-xl ml-auto ">
//             Message
//           </button>
//         </div>
//       </div>

//       {/* Sucess Tips */}
//       <div className="flex flex-col items-center justify-center rounded p-3 my-7 bg-blue-200 h-auto">
//         <div className="w-full mb-3">
//           <div className="w-full flex items-center">
//             <h3 className=" font-bold">#1 Tips for Success</h3>
//             <div className="ml-auto">
//               <FaGreaterThan />
//             </div>
//           </div>
//           <h2 className="text-lg font-bold my-3">
//             How to prepare for your first meeting?
//           </h2>
//         </div>
//         <div className="w-full flex items-center gap-4">
//           <div>
//             <p className="text-md text-gray-700">
//               Plan an agenda! Plan out the questions and topics you’d like
//               to discuss. If you’d like to work together on long-terms
//               goals, set some time to discuss expectation for each other.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
