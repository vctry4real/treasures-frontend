import { createContext, useContext, useState } from 'react';
import { PublicApi } from '../api';
import DOMPurify from 'dompurify';
import { useAlertContext } from './AlertProvider';

const RegisterContext = createContext({});

const RegisterChildProvider = ({ children }) => {
  const { showAlert } = useAlertContext();
  const [childProgress, setChildProgress] = useState(0);

  const [childRegistrationData, setChildRegistrationData] = useState({
    name: '',
    'date of birth': new Date(),
    weight: 0,
    height: 0,
    'blood group': '',
    genotype: '',
    allergies: '',
    disabilities: '',
    picture: '',
    'birth certificate': '',
    'medical document': [],
  });

  const handleChange = (e) => {
    const sanitizedInput = DOMPurify.sanitize(e.target.value);

    setChildRegistrationData((prev) => ({
      ...prev,
      [e.target.name]: sanitizedInput,
    }));
  };

  const handleNextStep = (e) => {
    setChildProgress(1);
  };

  const handlePreviousStep = (e) => {
    setChildProgress(0);
  };

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    console.log(formData);

    try {
      //   const { status } = await PublicApi.post(
      //     '/dashboard/childregister',
      //     { ...formData },
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     }
      //   );
      //   if (status === 201) {
      //     showAlert({ text: 'Child successfully registerd', type: 'successs' });
      //     console.log('Child registered!');

      //     handleNextStep();
      //   }
      console.log(childRegistrationData);
      handleNextStep();
    } catch (err) {
      console.log(err);
      showAlert({ text: 'Server Error', type: 'danger' });
    }
  };

  const dataToSend = {
    childRegistrationData,
    childProgress,
    setChildProgress,
    setChildRegistrationData,
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

export default RegisterChildProvider;

export const useChildRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};
