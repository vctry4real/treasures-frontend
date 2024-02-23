import React from "react";
import { FaHeadset } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const ChildAccount = () => {
  return (
    <div className="container max-w-2xl mx-auto">
      <div className="top-section flex justify-around items-center p-2 my-4">
        <span className="arrow cursor-pointer"><FaAngleLeft /></span>
        <span className="title text-lg">Add child account/profile</span>
        <span className="phone-icon cursor-pointer"><FaHeadset /></span>
      </div>
      <div className="add-header text-center my-16 text-3xl">Add</div>
      <div className="radio-section flex flex-col items-center">
        <div className="radio-option border border-gray-300 p-4 w-full max-w-md rounded-lg flex items-center my-4">
          <input type="radio" id="option1" name="option" className="mr-4" />
          <label htmlFor="option1">A Single Child</label>
        </div>
        <div className="divider my-4">or</div>
        <div className="radio-option border border-gray-300 p-4 w-full max-w-md rounded-lg flex items-center">
          <input type="radio" id="option2" name="option" className="mr-4" />
          <label htmlFor="option2">Multiple Children</label>
          <span className="innerBtnSection ml-auto flex items-center">
            <input
              type="button"
              className="innerBtn border-2 border-black font-semibold rounded-md cursor-pointer"
              value="-"
            />
            <span className="numOfKids px-4 font-semibold">2</span>
            <input
              type="button"
              className="innerBtn border-2 border-black font-semibold rounded-md cursor-pointer"
              value="+"
            />
          </span>
        </div>
      </div>
      <div className="create-btn border border-black p-4 w-full max-w-md rounded-lg cursor-pointer flex justify-center items-center mx-auto my-4 text-white bg-primary">
        <span className="text-center">Create</span>
      </div>
    </div>
  

  );
};

export default ChildAccount;
