import React, { useState } from 'react';
import CardWrapper from '../CardWrapper';
import Success from './Success';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ChildForm from '../(child)/ChildForm';
import ChildProfileSuccess from '../(child)/ChildProfileSuccess';
import { useChildRegisterContext } from '../../providers/RegisterChildProvider';
import RegisterChildProvider from '../../providers/RegisterChildProvider';

import { motion, AnimatePresence } from 'framer-motion';

const ChildRegistrationSlide = () => {
  const navigate = useNavigate();
  const { childProgress } = useChildRegisterContext();

  const ActiveSLide = ({ childProgress }) => {
    return (
      <AnimatePresence>
        {childProgress === 0 ? (
          <>
            {' '}
            <ChildForm />
          </>
        ) : childProgress === 1 ? (
          <>
            {' '}
            <ChildProfileSuccess />
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
    <div>
      <CardWrapper className="mt-12 p-6 w-full flex flex-col items-center justify-center">
        <ActiveSLide {...{ childProgress }} />
      </CardWrapper>
    </div>
  );
};

export default ChildRegistrationSlide;
