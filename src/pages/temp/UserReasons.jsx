import { React, useState, useRef } from 'react';
import TreasureLogo from '../assets/Treasure.svg';
import { useNavigate } from 'react-router-dom';
import { useResetContext } from '../../providers/RegisterProvider';

// early detection
import { GiBullseye } from 'react-icons/gi';
// checkups
import { FaClipboardCheck } from 'react-icons/fa6';
// general health info
import { HiOutlineLightBulb } from 'react-icons/hi';
// access to medical assistance
import { FaUserDoctor } from 'react-icons/fa6';
// education on child health
import { PiBooksLight } from 'react-icons/pi';
// labs &diagnostics centers
import { GiChemicalDrop } from 'react-icons/gi';

const reasons = [
  {
    title: 'General health information',
    icon: <HiOutlineLightBulb className="text-2xl" />,
  },
  {
    title: 'Access to medical assistance',
    icon: <FaUserDoctor className="text-2xl" />,
  },
  {
    title: 'Timely health checkups',
    icon: <FaClipboardCheck className="text-2xl" />,
  },
  {
    title: 'Early illness detection',
    icon: <GiBullseye className="text-2xl" />,
  },
  {
    title: 'Education on child health',
    icon: <PiBooksLight className="text-2xl" />,
  },
  {
    title: 'Labs & Diagnostic Centers',
    icon: <GiChemicalDrop className="text-2xl" />,
  },
];

// Loop through the api provided usertypes
const CardList = () => {
  return (
    <div className="min-w-300 justify-center">
      {reasons.map((reason, index) => {
        return <CardListItem key={index} reasonOption={reason} />;
      })}
    </div>
  );
};

// Create item cards from type object
const CardListItem = ({ reasonOption }) => {
  const { userReason, setUserReason } = useResetContext('');

  return (
    <div
      className="w-[400px] bg-white justify-center cursor-pointer hover:bg-gray-200 active:bg-gray-400 focus:bg-gray-400 
    flex flex-col border-2 border-gray-400 p-4 gap-4 mb-4 shadow-3xl rounded-md bg-grey-800"
      // onClick={""}
    >
      <div className=" w-full flex flex-row justify-between items-center align-center ">
        <div className="flex items-center justify-center h-8 w-8 p-4 rounded-md bg-gray-200 mx-2">
          <div className="">{reasonOption.icon}</div>
        </div>

        <div className="text-left w-full pl-3">{reasonOption.title} </div>
        <div>
          <input
            type="radio"
            name="reason"
            value={reasonOption.title}
            onClick={() => {
              setUserReason(reasonOption.title);
            }}
            className="checked:bg-black before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          />
        </div>
      </div>
    </div>
  );
};

// Reasons page
const UserReasons = () => {
  const navigate = useNavigate();

  return (
    // Whole screen
    <div className=" bg-primary w-full h-screen flex items-center justify-center">
      {/* LHS image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center lg:h-screen">
        {/* Image full on mobile, 0.5 on tablet and 0.67 on PC */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={TreasureLogo}
            alt="Treasure Logo"
            className="hidden md:block md:h-[1024px] w-auto lg:h-[768px]"
          />
        </div>
        {/* Temporary Carousel indicator Justify: y-axis  while items: x-axis*/}
        <div className="bg-zinc-200 rounded-md h-screen flex flex-col items-center w-screen md:w-1/2 lg:w-2/3">
          <div
            id="carouselSlide"
            className="w-1/2 p-4 flex min-w-[300px] justify-center items-center align-center"
          >
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-300" />
          </div>

          <h2 className="text-left font-serif mb-1 text-gray-950 text-xl font-bold tracking-wide p-4 justify-center item-center">
            What brings you to Treasures &#8230;
          </h2>
          <p className="font-serif mb-1 text-gray-500 text-md font-bold tracking-wide p-4 ">
            Select primary reason
          </p>
          <div className="">
            <CardList />
          </div>
          <p className="mr-1">
            Already have an account?
            <a href="/auth" className="text-blue-600 font-bold">
              &nbsp;Login.
            </a>
          </p>
          <button
            className="w-1/3 mt-4 hover:bg-primary p-2 rounded
          m-4 bg-black text-white focus:bg-green focus:fill-white w-400"
            onClick={() => {
              navigate('/auth');
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserReasons;
