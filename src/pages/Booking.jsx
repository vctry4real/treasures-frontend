import React from 'react';
import { SiGooglemaps } from "react-icons/si";

const Booking = () => {
  return (
    <div className="p-4 ">
      <div className=" w-full p-4  text-gray-900 rounded-lg  ">
        <div className="w-full flex flex-col items-start text-left h-auto mb-4 rounded  ">
          <h2 className='text-2xl font-bold mb-3'>Book and appointment</h2>
          <p className="text-md text-gray-400 mb-2">
            Your location
          </p>
          <div className='w-full flex items-center justify-between'>
            <h3 className='flex items-center text-lg font-semibold'><span className='mr-2'><SiGooglemaps/></span>Lagos, Nigeria</h3>
            <button className='text-lg font-semibold'>Change</button>
          </div>
        </div>
        {/* Search Box */}
        <div className="flex flex-row items-center ">
            
        </div>
      </div>
    </div >
  )
};

export default Booking;
