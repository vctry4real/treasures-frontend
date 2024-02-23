import { createContext, useCallback, useContext, useState } from 'react';
import { PublicApi } from '../api';
import DOMPurify from 'dompurify';
import { useAlertContext } from './AlertProvider';

const RegisterContext = createContext({});

const RegisterProvider = ({ children }) => {
  const { showAlert } = useAlertContext();
  const [progress, setProgress] = useState(0);

  const [registrationData, setRegistrationData] = useState({
    reason: '',
    type: '',
  });

  const handleNextStep = () => {
    setProgress((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePreviousStep = () => {
    setProgress((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleChange = (e) => {
    const sanitizedInput = DOMPurify.sanitize(e.target.value);

    setRegistrationData((prev) => ({
      ...prev,
      [e.target.name]: sanitizedInput,
    }));
  };

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    console.log(formData);

    try {
      const { status } = await PublicApi.post(
        '/auth/signup',
        { ...formData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (status === 201) {
        showAlert({ text: 'User created', type: 'success' });
        console.log('User created');

        handleNextStep();
      }
    } catch (error) {
      console.log(error);
      showAlert({ text: 'Registration Error', type: 'danger' });
    }
  };

  const dataToSend = {
    registrationData,
    progress,
    setProgress,
    setRegistrationData,
    handleChange,
    handleSubmit,
    handleNextStep,
    handlePreviousStep,
  };

  return (
    <RegisterContext.Provider value={dataToSend}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};
