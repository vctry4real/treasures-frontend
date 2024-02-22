import React, { useState } from 'react';
import ChildForm from '../components/(child)/ChildForm';
import ChildProfileSuccess from '../components/(child)/ChildProfileSuccess';
import { useChildRegisterContext } from '../providers/RegisterChildProvider';
import RegisterChildProvider from '../providers/RegisterChildProvider';
import ChildRegistrationSlide from '../components/registration/ChildRegistrationSlide';
import { motion, AnimatePresence } from 'framer-motion';

const ChildCreation = () => {
  // const childProgress = useState(0);
  // const { handleNextStep, handlePreviousStep } = useChildRegisterContext();

  return (
    <div>
      <motion.div>
        <RegisterChildProvider>
          <ChildRegistrationSlide />
        </RegisterChildProvider>
      </motion.div>
    </div>
  );
};

export default ChildCreation;
