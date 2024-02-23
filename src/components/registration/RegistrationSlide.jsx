import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Signup from './Signup';
import CardWrapper from '../CardWrapper';
import SelectUserTypeList from './SelectUserType';
import { useRegisterContext } from '../../providers/RegisterProvider';
import SelectReasonList from './SelectReason';
import GoogleAuth from '../temp/GoogleAuth';
import Success from './Success';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function ThreeBarProgressBar({ progress }) {
  return (
    <div className="flex w-full gap-4 justify-between h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`flex-grow h-full ${progress >= 0 ? 'bg-[#003B3B]' : 'bg-gray-300'}`}
      ></div>
      <div
        className={`flex-grow h-full ${progress >= 1 ? 'bg-[#003B3B]' : 'bg-gray-300'}`}
      ></div>
      <div
        className={`flex-grow h-full ${progress >= 2 ? 'bg-[#003B3B]' : 'bg-gray-300'}`}
      ></div>
    </div>
  );
}
const RegistrationSlide = () => {
  const navigate = useNavigate();
  const { progress, handleNextStep, handlePreviousStep } = useRegisterContext();

  const ActiveSLide = ({ progress }) => {
    return (
      <AnimatePresence>
        {progress === 0 ? (
          <>
            {' '}
            <SelectUserTypeList />
            <button onClick={handleNextStep}>Next</button>
          </>
        ) : progress === 1 ? (
          <>
            {' '}
            <SelectReasonList />
            <button onClick={handleNextStep}>Next</button>
          </>
        ) : progress === 2 ? (
          <>
            <Signup />
            <div className="mt-4 w-full flex justify-center gap-2">
              <GoogleAuth />
            </div>
          </>
        ) : (
          <>
            <Success />
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          </>
        )}
      </AnimatePresence>
    );
  };
  return (
    <div className="w-full">
      <ThreeBarProgressBar {...{ progress }} />
      <CardWrapper className="mt-12 p-6 flex flex-col items-center ">
        <ActiveSLide {...{ progress }} />
        <span className="mt-4 text-gray-500">
          {' '}
          Have an account?{' '}
          <Link to="/auth" className="text-yellow-400">
            Signin
          </Link>
        </span>
      </CardWrapper>
    </div>
  );
};

export default RegistrationSlide;
