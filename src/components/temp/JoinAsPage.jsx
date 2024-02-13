import { React, useState, useRef } from "react";
import TreasureLogo from "../assets/Treasure.svg";
import { useResetContext } from "../providers/resetProvider";
import { CardList } from "../pages/JoinAs";

export const JoinAsPage = () => {
  const { email, setEmail } = useResetContext();

  const radioRef = useRef();
  const [userCatState, setUserCatState] = useState(null);

  return (
    // Whole screen
    <div className="bg-primary w-full h-screen flex items-center justify-center  ">
      {/* LHS image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center lg:h-screen">
        {/* Image full on mobile, 0.5 on tablet and 0.67 on PC */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={TreasureLogo}
            alt="Logo"
            className="w-full h-auto md:h-[1024px] lg:h-[768px]" />
        </div>

        {/* Temporary Carousel indicator       Justify: y-axis  while items: x-axis*/}
        <div className="bg-white rounded-md h-screen flex flex-col items-center justify-center w-screen md:w-1/2 lg:w-2/3">
          <div id="carouselSlide" className="w-1/2 p-4 flex ">
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-300" />
          </div>

          <h2 className="text-center font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide p-8 justify-center item-center">
            Join as a &#8230;
          </h2>

          <CardList />
          <p className="mr-1">
            Already have an account?
            {email}
            <a href="/auth" className="text-green-600">
              &nbsp;Login.
            </a>
          </p>
        </div>
        <button
          className="bg-black  focus:bg-green focus:fill-white "
          onClick={""}>
          Join as a
          {/* {cardType.title} */}
        </button>
      </div>
    </div>
  );
};
