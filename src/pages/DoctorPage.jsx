// import React from 'react';
// import doctor from '../assets/Doctor1.jpg';
// import helium from '../assets/Helium.svg';
// import {doctors, users, userReview} from

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const doctors =

// const smallLabel = 'text-center text-[#212121] text-xs font-outfit font-normal';

// const DoctorPage = (docEmail) => {
//   // const [ docInfo, setDocInfo ] =
//   // const [ comment, setComment ] =
//   return (
//     <div>
//       <aside className="bg-secondary w-1/4">
//         <div className="flex flex-col">
//           <img className="h-20 w-20 round-full" src={doctor}></img>
//         </div>
//       </aside>
//       <div>
//         <h3>{doc.name}</h3>
//         <div>
//           <helium />
//           <p>
//             {doc.title} at {doc.hospital}
//           </p>
//         </div>
//         <div>
//           <h3>Bio</h3>
//           <p>{doc.bio}</p>
//         </div>
//         <div className="flex">
//           <div className="flex flex-col">
//             <p>Total minutes</p>
//             <p>1000</p>
//             <span>mins</span>
//           </div>
//           <hr />
//         </div>
//         <div className="justify-between">
//           <div>
//             <h3>Reviews {doc.review.lenght}</h3>
//             <span>Stars</span>
//           </div>
//           <button className={smallLabel}>View all</button>
//         </div>
//         <div>
//           {/* Swiper for carousel */}
//           <Swiper
//             // install Swiper modules
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             spaceBetween={50}
//             slidesPerView={1}
//             // navigation
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 50,
//               },
//             }}
//             // scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//             className="w-full"
//           >
//             {slides.map((slide, index) => {
//               return (
//                 <SwiperSlide key={index} className="w-full h-auto mb-10">
//                   <div className="w-full h-auto p-4 items-center justify-center bg-white rounded-xl">
//                     <div className="w-full h-atuo mb-3">
//                       <div>
//                         <div className="w-5 h-5 rounded-full"></div>
//                         <h3 className="flex items-center">
//                           <span className="mr-4">{slide.icon}</span>
//                           {slide.title}
//                         </h3>
//                       </div>
//                       <div className="mt-2 bg-gray-300">
//                         <img
//                           src={slide.image}
//                           alt="educational resources"
//                           className="w-full h-full "
//                         />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-md my-2">
//                           {slide.title2}
//                         </h4>
//                         <p>{slide.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorPage;
